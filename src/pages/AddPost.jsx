import React from 'react'
import {Container, PostForm} from "../components/index"

function AddPost() {
  const breadcrumbs = [
    {label: "Home", path:"/"},
    {label: "Add Post", path:"/add-post"},
]

  return (
    <div className='py-8'>
        <Container item={breadcrumbs}>
        <h2 className="text-center md:text-left font-medium mb-4 text-2xl">
        Add Post
      </h2>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost