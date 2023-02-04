import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import imgUser from '../assets/img/user.png'
import getConfig from '../utils/getConfig';

const User = () => {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.setItem('token', '');
        navigate('/login')
        scrollTo(0, 0)
      }

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        if(localStorage.getItem('token')=== ''){
            getConfig()

        }else{
            axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/users/me', getConfig())
            .then((res)=>setUsers(res.data))
        }
  

    },[])








   
    return (
        <div className='container-user'>
            <Card style={{ width: '20rem', padding: '1rem' }}>
                <Card.Img style={{width: '150px', margin: '0 auto'}} variant="top" src={imgUser} />
                <Card.Body className='card-user'>
                    <Card.Title>{`${users?.firstName} ${users?.lastName}`}</Card.Title>
                    
                    <Button onClick={logOut} variant="primary">Logout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default User;