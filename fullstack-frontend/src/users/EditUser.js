
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {
    let navigate = useNavigate()

    const {id}=useParams()

    const [user, setUsers]=useState({
        name:"",
        username:"",
        email:""
    })

    useEffect(()=>{
        loadUsers();
    },[])

    const{name, username,email}=user

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value})
    }

    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/");
    }

    const loadUsers=async(e)=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUsers(result.data)
    }
    

  return (
    <div className='container'>
        <div className='row'>
            {/* col-md means column medium size */}
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit User</h2>
                {/* classname = mb-3 means margin bottom 3/ mt- margin top/ ml-margin left */}
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlfor="Name" className='form-label'>Name</label>
                        <input type={"text"} className='form-control' 
                        placeholder='Enter your name' name='name' value={name}
                        onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlfor="Username" className='form-label'>Username</label>
                        <input type={"text"} className='form-control' 
                        placeholder='Enter your username' name='username' value={username}
                        onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlfor="Email" className='form-label'>Email</label>
                        <input type={"text"} className='form-control' 
                        placeholder='Enter your email' name='email' value={email}
                        onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <button type="submit" className='btn btn-primary'>Save</button>
                    <Link  className='btn btn-danger mx-2' to="/">Cancel</Link>
                </form>
                

            </div>

        </div>
    </div>
  )
}
