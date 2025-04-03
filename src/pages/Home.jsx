import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import {Container, PostCard, } from "../components/index"
import { Link } from 'react-router-dom'


function Home() {
    const [posts, setPosts] = useState([]) 
    
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
                
    },[])

    const breadcrumbs = [
        {label: "Home", path:"/"}
    ]

    if(posts.length === 0){
        return (
            <div className='w-full py-8 mt-8 text-center'>
                <Container item = {breadcrumbs}>
                   
                    <div className='flex flex-wrap min-h-48 justify-center items-center'>
                        <div className='p-5 w-max border border-gray-400 rounded-2xl'>
                            <h1 className='text-2xl font-bold hover:text-gray-700'>No Posts Available! <Link to='/add-post'>Create</Link></h1>
                        </div>
                    </div>
                </Container>

            </div>
        )
    }

    return (
        <div className='w-full py-8'>
        <Container item = {breadcrumbs}>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-full md:w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home