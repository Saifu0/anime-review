import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Alert,Spin, Typography } from 'antd';

const { Title, Text } = Typography;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

function LoginForm() {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');
    const history = useHistory();

    const getPayload = token => {
        if (token) {
            try {
                return JSON.parse(atob(token.split('.')[1]));
            } catch (error) {
            }
        }
        return null;
    };

    const onFinish = (values) => {
        const confidential = {
            username : values.username,
            password : values.password
        }
        setLoading(true);
        axios.post('api/token/', confidential)
            .then( res => {
                const payload = getPayload(res.data.access);
                localStorage.setItem("refresh_token",res.data.refresh);
                localStorage.setItem("access_token",res.data.access);
                localStorage.setItem("user_id", payload.user_id);
                localStorage.setItem("username", payload.username);
                axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
                setLoading(false);
                history.push("/");
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
                setTimeout(() => {
                    setError('');
                },3000);
            });
      }; 

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ width: '40%', marginLeft: '28%', marginTop: '3%' }}>
            <Title style={{ marginLeft: '45%' }}>Login Form</Title>
            {
            loading ? <Spin size="large" style={{justifyContent : "center", display: "flex"}}/> : 
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            }
            <Text type="warning" style={{ marginLeft: '45%' }}>Don't have an account? 
                <Link to="/register">
                    <Button type="link">
                        Register Here!
                    </Button>
                </Link>
            </Text>
            {error && <Alert message={error} type="error"/>}
        </div>
    )
}

export default LoginForm