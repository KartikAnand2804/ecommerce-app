import React, { useState }from 'react';
import { useForm } from "react-hook-form";
import UserService from '../services/UserService';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    const [user, setUser] = useState({
        id:"",
        type:"",
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
        userName:"",
    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    };

    const saveUser = (e) =>{
        e.preventDefault();
        UserService.saveUser(user).then((response)=>{console.log(response)}).catch((error)=>{console.log(error);})
    }

    return (
        <>
            <div class="w-2/5" style={{ marginLeft: "480px" }}>
                <h2 style={{ textAlign: "center" }}>SignUp Form</h2>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
                            Sign up as Vendor or User
                        </label>
                        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" placeholder="Select the type" name="type" value={user.type} onChange={(e)=> handleChange(e)}>
                            <option value="none" selected>Select the type of Account below</option>
                            <option value="Vendor">Vendor</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    {/* {errors.type && <p className="text-red-500 text-xs italic">Enter the type of Account</p>} */}

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input {...register("username", { required: true, maxLength: 12 })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="userName" value={user.userName} onChange={(e) => handleChange(e)}/>
                    </div>
                    {errors.username && <p className="text-red-500 text-xs italic">Please check the First Name</p>}
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                            First Name
                        </label>
                        <input {...register("firstname", { required: true, maxLength: 12 })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="first name" name="firstName" value={user.firstName} onChange={(e) => handleChange(e)}/>
                    </div>
                    {errors.firstname && <p className="text-red-500 text-xs italic">Please check the First Name</p>}
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                            Last Name
                        </label>
                        <input {...register("lastname", { required: true, maxLength: 12 })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="last name" name="lastName" value={user.lastName} onChange={(e) => handleChange(e)}/>
                    </div>
                    {errors.lastname && <p className="text-red-500 text-xs italic">Please check the First Name</p>}
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" name="emailId" value={user.emailId} onChange={(e) => handleChange(e)}/>
                    </div>
                    {errors.email && <p className="text-red-500 text-xs italic">Please check the First Name</p>}
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("firstName", { required: true, maxLength: 10 })} id="password" type="password" placeholder="******" name="password" value={user.password} onChange={(e) => handleChange(e)}/>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs italic">Please check the Password</p>}
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmpassword">
                            Confirm Password
                        </label>
                        <input {...register("confirmpassword", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("firstName", { required: true, maxLength: 10 })} id="password" type="password" placeholder="******" />
                    </div>
                    {errors.confirmpassword && <p className="text-red-500 text-xs italic">Please check the Password</p>}
                    <div class="flex items-center justify-center">
                        <button onClick={saveUser} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}


