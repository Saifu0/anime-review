import React from 'react';
import Button from '@mui/material/Button';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';

function AnimeList(props) {

    const { data } = props;

    return (
        <div style={{ marginTop: 10 }}>
            {data.map((d) => {
                const genres = d.genres.join(', ');
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
                            <Descriptions.Item label="Score" span={3}>{d.score}</Descriptions.Item>
                            <Descriptions.Item label="Rating" span={3}>0</Descriptions.Item>
                        </Descriptions>
                        <Link to={{
                            pathname: `/anime/${d.id}`,
                            data: d
                        }}>
                            <Button color="secondary" variant="contained">Learn More</Button>
                        </Link>
                    </div>
                );
            })}
            
        </div>
    )
}

export default AnimeList
