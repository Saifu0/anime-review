import React from 'react';
import { Button, Descriptions, Modal } from 'antd';
import { Grid } from '@mui/material';

function AnimeDetail(props) {
    const data = props.location.data;
    const [open, setOpen] = React.useState(false);

    const handleSubmit = () => {
        setOpen(false);
    }

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
                    <Modal title="Review Detail" visible={open} onOk={() => handleSubmit()} onCancel={() => setOpen(false)}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </div>
            
        </div>
    )
}

export default AnimeDetail
