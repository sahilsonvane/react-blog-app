import React,{useEffect, useState} from 'react'
import authService from '../appwrite/auth'
import { Button, Container, Input } from '../components'
import { useForm } from 'react-hook-form';

function Account() {
    const [userInfo, setUserInfo] = useState({})
    const {register, handleSubmit} = useForm();
    const [msg , setMsg] = useState("")
    
    const updatePass = async (data)=>{
        setMsg("")
        console.log(data.password);
        
        try {
            const res = await authService.updatePassword(data)
            if(res){
                setMsg("Password Updated Successfully!");

            }
        } catch (error) {
            setMsg(error.message)
        }

    }
    
    const breadcrumbs = [
        {label: "Home", path:"/"},
        {label: "Account", path:"/account"},
    ]

    useEffect(()=>{
        authService.getCurrentUser().then((user)=>{
            setUserInfo(user)
        })

        

    },[])

  return (
    <>
    <Container item = {breadcrumbs}>
        <div className='min-h-72 p-5'>
            <h3 className='text-center my-4 text-2xl font-bold'>Account Info</h3>
            <div className='border border-black/40 w-85% max-w-3xl p-6 rounded-3xl mx-auto'>
                <div className='grid grid-cols-2'>

                <h2 className='my-2'>Full Name: </h2> <h2>{userInfo?.name || ""}</h2>
                <h2 className='my-2'>Email Address: </h2> <h2>{userInfo?.email || ""}</h2>
                </div>

            <Button type='button' className='mt-5 ' bgColor='bg-green-600'>Edit</Button>
            </div>
            <h3 className='text-center my-5 text-2xl font-bold'>Change Password</h3>
            <div className='border border-black/40 w-85% max-w-3xl p-6 rounded-3xl mx-auto'>
                <form onSubmit={handleSubmit(updatePass)}>

                <div className='grid grid-cols-2 gap-5'>
                <h2 className='my-2'>Old Password: </h2> <Input type="password" placeholder="Enter Old Password" {...register("oldPassword",{
                        required:true,
                    })}/>
                <h2 className='my-2'>New Password: </h2> <Input type="password" placeholder="Enter New Password" {...register("password" ,{
                         required: true,
                     })} />
                </div>
            <Button type='submit' className='mt-5 mx-auto text-center' bgColor='bg-green-600'>Update</Button> 
           { msg && <p className='text-right text-green-600'>{msg}</p>}
                </form> 
            </div>
        </div>
        </Container>
    </>

)

}

export default Account