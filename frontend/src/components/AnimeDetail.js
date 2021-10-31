import React from 'react';
import axiosInstance from '../axios';
import { Button, Descriptions, Modal, Form, Input, Rate, Card, Typography, Row, Col } from 'antd';
import { Grid } from '@mui/material';

function AnimeDetail(props) {
    const data = props.location.data;
    const [reviews, setReviews] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState(0);
    const [description, setDescription] = React.useState("");

    const handleSubmit = (id) => {
        const body = {
            rating,
            description,
            anime_id: id
        }
        axiosInstance.post('add-review/', body)
            .then((res) => {
                console.log(res.data);
                setOpen(false);
                setRating(0);
                setDescription('');
            })
            .catch((err) => console.log(err));
    }

    React.useEffect(() => {
        axiosInstance.get(`review/${data.id}`)
            .then((res) => setReviews(res.data))
            .catch((err) => console.log(err.message));
    }, [data.id, open]);

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const genres = data.genres.join(', ');
    return (
        <div>
            <div style={{ marginLeft: '10%', marginTop: '30px' }}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={9}>
                        <Descriptions bordered>
                            <Descriptions.Item label="Title" span={3}>{data.titles.en}</Descriptions.Item>
                            <Descriptions.Item label="Genres" span={3}>
                                {genres}
                            </Descriptions.Item>
                            <Descriptions.Item label="Description" span={3}>
                                {data.descriptions.en}
                            </Descriptions.Item>
                            <Descriptions.Item label="Season Year" span={3}>{data.season_year}</Descriptions.Item>
                            <Descriptions.Item label="Episodes" span={3}>{data.episodes_count}</Descriptions.Item>
                            <Descriptions.Item label="Score" span={3}>{data.score}</Descriptions.Item>
                            <Descriptions.Item label="Start Date" span={3}>{data.start_date}</Descriptions.Item>
                            <Descriptions.Item label="End Date" span={3}>{data.end_date}</Descriptions.Item>
                        </Descriptions>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={data.cover_image} alt="banner" />
                    </Grid>
                </Grid>
                <div>
                    <Button onClick={() => setOpen(true)}>Add Review</Button>
                    <Modal title="Review Detail" visible={open} onOk={() => handleSubmit(data.id)} onCancel={() => setOpen(false)}>
                        <Form
                            name="basic"
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            >
                                <Form.Item
                                    label="Rating"
                                    name="rating"
                                    
                                    rules={[{ required: true, message: 'Please choose a rating!' }]}
                                >
                                    <Rate onChange={(value) => setRating(value)} value={rating} />
                                </Form.Item>

                                <Form.Item
                                    label="Description"
                                    name="description"
                                    
                                    rules={[{ required: true, message: 'Please enter some description!' }]}
                                >
                                    <Input.TextArea onChange={(e) => setDescription(e.target.value)} value={description} />
                                </Form.Item>
                            </Form>
                    </Modal>
                </div>

                <div style={{ marginTop: '10px' }}>
                    <Typography.Title>Reviews</Typography.Title>
                    <Row gutter={16}>
                        {reviews.map((review) => {
                            return (
                                <Col key={review.id} span={8}>
                                    <Card title={`User ID: ${review.user}`} bordered={false} style={{ width: 300 }}>
                                        <Rate defaultValue={review.rating} />
                                        <Typography><i>{review.description}</i></Typography>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
            
        </div>
    )
}

export default AnimeDetail
