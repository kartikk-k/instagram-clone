import Image from 'next/image'
import React from 'react'
import { LikeIcon, MessageIcon } from '../Icons'

const Post = [
    {
        img: "https://instagram.fixy1-1.fna.fbcdn.net/v/t51.2885-15/318488919_1141406943148214_6846503132869406049_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fixy1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=HISu2SkXWBcAX8AoNeT&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk4OTAwMTgyNzU1MTI1Nzk0NQ%3D%3D.2-ccb7-5&oh=00_AfCMem2Ho8akvVojU-iiYFwJ5XM3x_VNjxApEmjWP56j3g&oe=644D76C0&_nc_sid=6136e7",
        profileImg: "https://images.unsplash.com/photo-1533711539834-ebcee9ed4975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Michael Jordan",
        username: "mic_jordan",
        likes: "2,802",
        comments: "45",
    },
    {
        img: "https://images.unsplash.com/photo-1535398079874-f4be78da1476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        profileImg: "https://images.unsplash.com/photo-1533711539834-ebcee9ed4975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Michael Jordan",
        username: "mic_jordan",
        likes: "2,802",
        comments: "45",
    },
    {
        img: "https://images.unsplash.com/photo-1515868769-ad822a0c67e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        profileImg: "https://images.unsplash.com/photo-1533711539834-ebcee9ed4975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Michael Jordan",
        username: "mic_jordan",
        likes: "2,802",
        comments: "45",
    },
    {
        img: "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        profileImg: "https://images.unsplash.com/photo-1533711539834-ebcee9ed4975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Michael Jordan",
        username: "mic_jordan",
        likes: "2,802",
        comments: "45",
    },

]

function Feed() {
    return (
        <div className='px-4 py-6 md:py-0  max-w-[550px] mx-auto'>
            <h1 className='hidden text-lg font-semibold text-gray-800 md:block'>Feed</h1>

            {/* posts */}
            <div className='flex-wrap py-2 space-y-6 overflow-hidden drop-shadow-sm rounded-xl'>
                {Post.map((post, index) => (
                    <div className='w-full bg-white rounded-lg' key={index}>
                        <div className='flex items-center gap-2 p-4'>
                            <Image src={post.profileImg} alt='' className='object-cover w-10 h-10 rounded-full' height={50} width={50} />
                            <div className='space-y-[-4px]'>
                                <p className='text-gray-800'>{post.name}</p>
                                <p className='text-sm text-gray-500'>{post.username}</p>
                            </div>
                        </div>

                        <div className=''>
                            <Image src={post.img} height={1440} width={1440} className='object-cover object-top w-full h-auto' alt='' />
                        </div>

                        <div className='flex gap-6 p-4'>
                            <div className='flex items-center gap-2'>
                                <LikeIcon className='w-5 h-5 stroke-gray-500' />
                                <p className='text-sm'>{post.likes}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MessageIcon className='w-5 h-5 stroke-gray-500 fill-gray-500' />
                                <p className='text-sm'>{post.comments}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Feed