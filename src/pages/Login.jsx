import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submit = (data) => {
        // console.log(data);
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then((res) =>{
                localStorage.setItem('token', res.data.token)
                navigate('/user');
            //  console.log(res.data)
            })
           
            .catch((error) => {
                if (error.response.status === 401) {
                    alert('Credenciales Incorrectas')
                }
                console.log(error);
            })
         
    }

    return (
        <Form onSubmit={handleSubmit(submit)} className='page-login'>
            <strong className='welcome_login'>
            Welcome! Enter your email and password to continue
            </strong>
            <br />

            <strong className='idication-login'>
            You have to Log In to access to your cart
            </strong>
            <br />

            <div className='tex-data-login'>
                <strong className='tes-data'>Test Data</strong>
            <i className='bx bx-envelope'> john@gmail.com</i>
            <i className='bx bx-key'> john1234</i>

            </div>

            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    {...register('email')}
                />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    {...register('password')}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form.Group>
            <strong>Don't have an account? <Link to={'/singup'} className='signUp'>Sign up</Link></strong>
            
        </Form>
    );
};

export default Login;