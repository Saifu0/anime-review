import React from 'react';
import AnimeListItem from './AnimeListItem';


function AnimeList(props) {

    const { data } = props;

    return (
        <div style={{ marginTop: 10 }}>
            {data.map((d) => <AnimeListItem d={d} /> )}
        </div>
    )
}

export default AnimeList
