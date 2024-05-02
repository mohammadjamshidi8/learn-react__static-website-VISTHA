import React from 'react'
import BlogPost from './components/BlogPost'
import test from './assets/test'

export default function Blog() {


    const postInfo = [
        {id: 1, img: 'https://raw.githubusercontent.com/mohammadjamshidi8/learn-react__static-website-VISTHA/main/src/assets/blog-1.jpg',title: 'Lorem ipsum dolor sit.',category: 'software',date: '2024/05/01'},
        {id: 2, img: 'https://raw.githubusercontent.com/mohammadjamshidi8/learn-react__static-website-VISTHA/main/src/assets/blog-2.jpg',title: 'Lorem ipsum dolor sit.',category: 'news',date: '2024/05/01'},
        {id: 3, img: 'https://raw.githubusercontent.com/mohammadjamshidi8/learn-react__static-website-VISTHA/main/src/assets/blog-3.jpg',title: 'Lorem ipsum dolor sit.',category: 'modern',date: '2024/05/01'},
    ]

  return (
    <div className="py-14 bg-gray-100">
      <div className="responsive flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <span className="text-black text-opacity-70">Our latest news</span>

          <h2 className="text-3xl xl:text-5xl 2xl:text-6xl font-black text-primary">
          Blog
          </h2>

          <span className="lg:text-lg lg:w-1/2">
          Lorem Epsom is a mock text with an incomprehensible simplicity produced by the printing industry and used by graphic designers
          </span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
           {postInfo.map(post => (
            <BlogPost key={post.id} {...post} />
           ))}
        </div>

      </div>
    </div>
  )
}
