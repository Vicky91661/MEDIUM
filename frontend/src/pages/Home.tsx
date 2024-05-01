import React from 'react'
import BlogCard from '../components/BlogCard'

function Home() {
  return (
    <div className=' bg-green-400'>
        <div className='w-7/12 bg-red-400 pr-4'>
            <div></div>
            <div className='flex flex-col items-end gap-3 py-10'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>

            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Home