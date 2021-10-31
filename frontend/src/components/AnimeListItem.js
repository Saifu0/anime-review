import React from 'react';
import Button from '@mui/material/Button';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import axiosInstance from '../axios';

function AnimeListItem({ d }) {
    const [averageRating, setAverageRating] = React.useState(undefined);
    const genres = d.genres.join(', ');
                
    React.useEffect(() => {
        setAverageRating(undefined);
        axiosInstance.get(`average-rating?anime_id=${d.id}`)
            .then((res) => setAverageRating(res.data))
            .catch((err) => console.log(err.message));
    }, [d.id]);

    return (
        <div key={d.id} style={{ marginLeft: '10%', width: '80%', marginBottom: '10px' }}>
            <Descriptions bordered>
                <Descriptions.Item label="Title" span={3}>{d.titles.en}</Descriptions.Item>
                <Descriptions.Item label="Genres" span={3}>
                    {genres}
                </Descriptions.Item>
                <Descriptions.Item label="Description" span={3}>
                    {d.descriptions.en}
                </Descriptions.Item>
                <Descriptions.Item label="Season Year" span={3}>{d.season_year}</Descriptions.Item>
                <Descriptions.Item label="Episodes" span={3}>{d.episodes_count}</Descriptions.Item>
                <Descriptions.Item label="Score(API Rating)" span={3}>{d.score}</Descriptions.Item>
                <Descriptions.Item label="User Rating" span={3}>{averageRating ? averageRating.average_rating : "N/A"}</Descriptions.Item>
            </Descriptions>
            <Link to={{
                pathname: `/anime/${d.id}`,
                data: d
            }}>
                <Button color="secondary" variant="contained">Learn More</Button>
            </Link>
        </div>
    );
}

export default AnimeListItem
