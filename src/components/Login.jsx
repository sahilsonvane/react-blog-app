import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("");

    const login = async (data)=>{
        setError("");
        try {
            const session = await authService.login(data)
            if (session){
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full p-5'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-5 md:p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[140px] mx-auto">
                        <Logo width="100%" />
                    </span>
        </div>
            <h2 className='text-center text-2xl font-bold'>
            Login to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-blue-500 text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-600 text-center mt-8'>{error}</p>}
            <form className='mt-8' onSubmit={handleSubmit(login)}>
            <div className='space-y-5'>
                <Input 
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email",{
                        required:true,
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                        }
                    })} 
                />

                <Input 
                    label="Password: "
                    type="password"
                    placeholder="Enter Your Password"
                    {...register("password" ,{
                        required: true,
                    })}
                />

                <Button 
                    type='submit'
                    className='w-full'
                >Login</Button>
            </div>

            </form>

        </div>
    </div>
  )
    
}

export default Login