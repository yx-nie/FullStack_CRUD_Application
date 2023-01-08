import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const {id}=useParams()

    const [user, setUsers]=useState({
        name:"",
        username:"",
        email:""
    })

    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async(e)=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUsers(result.data)
    }



  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>View User</h2>
                <div className='mb-3'>
                        <label htmlfor="Name" className='form-label'>Name</label>
                        <input type={"text"} className='form-control' 
                        value={user.name}
                        ></input>
                </div>
                <div className='mb-3'>
                        <label htmlfor="Username" className='form-label'>Username</label>
                        <input type={"text"} className='form-control' 
                        value={user.username}
                        ></input>
                </div>
                <div className='mb-3'>
                        <label htmlfor="Email" className='form-label'>Email</label>
                        <input type={"text"} className='form-control' 
                        value={user.email}
                        ></input>
                </div>
                <Link className='btn btn-outline-primary mx-2' to={"/"}>Back to Home Page</Link>
            </div>
        </div>
        </div>
    </div>
  )
}
