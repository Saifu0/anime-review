import React from 'react';
import axios from 'axios';
import { Input, Select } from 'antd';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AnimeList from './AnimeList';

const { Search } = Input;
const { Option } = Select;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const showAlert = (message, severity) => {
    return (
        <Alert severity={severity} sx={{ width: '100%' }}>
            {message}
        </Alert>
    )
}

function SearchPage() {
    const [searchBy, setSearchBy] = React.useState('title');
    const [open, setOpen] = React.useState(false);
    const [alert, setAlert] = React.useState(null);
    const [data, setData] = React.useState([]);

    const onSearch = (value) => {
        axios.get(`https://api.aniapi.com/v1/anime?${searchBy}=${value}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data.data.documents);
                setAlert(showAlert("Response: " + response.data.message, response.data.status_code === 404 ? "warning" : "success"));
                setOpen(true);
            })
            .catch((error) => {
                setAlert(showAlert(error.message, "error"));
                setOpen(true);
            });
    } 

    const handleChange = (value) => {
        setSearchBy(value);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Search
                placeholder="Seach an Anime"
                onSearch={onSearch}
                enterButton
                size="large"
                style={{ marginLeft: '22%', marginTop: '10%', width: '50%' }}
            />
            <Select 
                placeholder="Search By"
                size="large"
                style={{ width: 120, marginTop: '10%' }} 
                onChange={handleChange}>
                    <Option value="genres">Genres</Option>
                    <Option value="title">Title</Option>
                    <Option value="description">Description</Option>
            </Select>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                {alert}
            </Snackbar>

            {data.length > 0 ? <AnimeList data={data} /> : <></>}
        </div>
    )
}

export default SearchPage
