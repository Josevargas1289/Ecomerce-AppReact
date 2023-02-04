import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getcartsThunk } from '../store/slices/addcart.slice';
import getConfig from '../utils/getConfig';

const SingUp = () => {

    const {register, handleSubmit}= useForm();
    const navigate = useNavigate();
    
    

    const submit = (data) => {
               
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users', data)
            .then((res) =>{
                navigate('/login');
                scrollTo(0, 0)

            })      
    }

    return (
        <Form onSubmit={handleSubmit(submit)} className='page-login'>
        <strong className='welcome_login'>
            Sing Up
        </strong>
        <br />

        <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" 
                {...register('email')}
            />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>First Name </Form.Label>
            <Form.Control type="text" 
                {...register('firstName')}
            />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Last Name </Form.Label>
            <Form.Control type="text" 
                {...register('lastName')}
            />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>


        <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
                {...register('password')}
            />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>phone </Form.Label>
            <Form.Control type="text" 
                {...register('phone')}
            />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form.Group>
        
        
    </Form>
    );
};

export default SingUp;