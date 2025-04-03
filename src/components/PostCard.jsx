import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className="justify-center mb-4 w-full h-full md:h-48">
                <img src={appwriteService.getFilePreview(featuredImage)} alt="title"
                    className='rounded-xl object-cover w-full h-full' />
            </div>
            <h2 className='text-xl md:text-lg text-center text-bold'
             >{title}</h2>
        </div>
    </Link>
  )
}
export default PostCard