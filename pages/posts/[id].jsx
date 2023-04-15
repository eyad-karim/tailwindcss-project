import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

function post(props) {
    return ( 
        <div className='lg:col-start-4 lg:col-span-6 md:col-span-10 sm:col-span-12 md:col-start-2'>
            {props.post.body.split('\n').map((line)=> <p>{line}</p>)}
        </div>
     );
}

export default post;

export async function getStaticPaths(context) {
    const res = await fetch(`http://localhost:3001/posts/`)
    const data = await res.json()  
    const paths = data.map(d =>  {
        return {
            params : { id: `${d.id}` }
        }
    })
    return {
      paths: paths,
      fallback: false
    } // will be passed to the page component as props
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3001/posts/${context.params.id}`)
    const data = await res.json()  
    return {
      props: {
        post: data
      },
    } // will be passed to the page component as props
}