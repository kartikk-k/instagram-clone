import Image from 'next/image'
import React from 'react'

const Post = [
    {
        img: "https://images.unsplash.com/photo-1529974019031-b0cd38fd54fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        profileImg: "https://images.unsplash.com/photo-1533711539834-ebcee9ed4975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Michael Jordan",
        username: "mic_jordan",
        likes: "2,802",
        comments: "45",
    },
    // {

    // }
]

function Feed() {
    return (
        <div className='px-4 py-6 md:py-0'>
            <h1 className='hidden text-lg font-semibold text-gray-800 md:block'>Feed</h1>

            {/* posts */}
            <div>
                {Post.map((post, index) => (
                    <div className='py-2' key={index}>
                        <p>{post.name}</p>
                        <div className=''>
                            <Image src={post.img} height={200} width={200} className='md:max-w-[200px] w-full h-auto max-h-[400px] rounded-xl' alt='' />
                        </div>
                        <div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Feed