import Link from 'next/link';

function CreatePost(props) {
    return ( 
        <div className="lg:col-start-4 lg:col-span-6 md:col-span-10 sm:col-span-12 md:col-start-2 mt-3 grid grid-cols-1 gap-3">
            {props.posts.map(post =>
                <div key={post.id} className="col-span-1 shadow-lg border-[1px] border-gray-500 rounded-md p-5 flex flex-row">
                    <div className='flex-1'>
                        {post.body.split('\n').map((line,i)=> <p key={i}>{line}</p>)}
                    </div>
                    <Link href={"/posts/" + post.id}><button className="btn !m-0">open</button></Link>
                </div>
            )}
            
        </div>
     );
}

export default CreatePost;



export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/posts/`)
    const data = await res.json()  
    return {
      props: {
        posts: data
      }, // will be passed to the page component as props
    }
}