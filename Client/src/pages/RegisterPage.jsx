import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterPage(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    function onRegister(e){
        e.preventDefault();
        axios.post('http://localhost:4000/register',{
            Name:name,
            Email:email,
            Password:password,
        }).then(res=>{
            res.json();
        }).then(data=>{
            console.log(data);
        })
    }
    return(
        <div className="mt-4 grow flex justify-around items-center h-screen">
            <div className="grow mb-32">
            <h1 className="text-4xl text-center">Register</h1>
            <form className="max-w-md mx-auto " onSubmit={onRegister}>
                <input type="text" placeholder="JohnDoe" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="email" placeholder="your@email.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="password" value={password} onChange={e =>{setPassword(e.target.value)}}/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member  <Link className="underline text-black"to={'/login'}> Login</Link> 
                </div>
            </form>
            </div>
        </div>
    )
}