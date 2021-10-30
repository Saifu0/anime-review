import React from 'react';
import Button from '@mui/material/Button';
import { Descriptions } from 'antd';

function AnimeList(props) {

    const { data } = props;

    return (
        <div>
            {data.map((d, index) => {
                const genres = d.genres.join(', ');
                return (
                    <div style={{ marginLeft: '10%', width: '80%', marginBottom: '10px' }}>
                        <Descriptions
                            key={d.id}
                            
                            bordered
                            >
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
                        <Button color="secondary" variant="contained">Learn More</Button>
                    </div>
                );
            })}
            
        </div>
    )
}

export default AnimeList
