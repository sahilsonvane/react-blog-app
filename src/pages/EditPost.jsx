import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';


function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    const breadcrumbs = [
        {label: "Home", path:"/"},
        {label: "Edit Post", path: `/edit-post/${slug}` },
    ]
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container item={breadcrumbs}>
            <h2 className="text-center md:text-left font-medium mb-4 text-2xl">
        Edit Post
      </h2>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}

export default EditPost