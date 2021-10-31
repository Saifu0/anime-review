import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Spin ,Alert, Typography } from 'antd';

const { Title, Text } = Typography;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

function RegisterForm() {
    const [loading, setLoading ] = React.useState(false);
    const [error, setError ] = React.useState("");
    const history = useHistory();

    const onFinish = (values) => {
        const confidential = {
            username : values.username,
            email : values.email,
            password : values.password
        }
        setLoading(true);
        axios.post("register/",confidential)
            .then( res => {
                console.log(res.data)
                history.push("/login");
            })
            .catch( err => {
                setError(err.message);
                setLoading(false);
                setTimeout(() => {
                    setError('');
                },3000);
            })
      };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ width: '40%', marginLeft: '28%', marginTop: '3%' }}>
            <Title style={{ marginLeft: '40%' }}>Registration Form</Title>
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
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
            }
            <Text type="warning" style={{ marginLeft: '45%' }}>Already have an account? 
                <Link to="/login">
                    <Button type="link">
                        Login Here!
                    </Button>
                </Link>
            </Text>
            {error && <Alert message={error} type="error"/>}
        </div>
    )
}

export default RegisterForm;