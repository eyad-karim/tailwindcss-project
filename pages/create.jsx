import { useState } from "react";
import axios from 'axios';
import Link from "next/link";

function CreatePost() {
    const [formData, setFormData] = useState({
        boby:"",
    });
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        
        setFormData(() => ({
            [fieldName]: fieldValue
        }));
    }
    const handleClick = () => {
        console.log(formData);
        axios.post("http://localhost:3001/posts",formData)
    }
    return ( 
        <div className="mt-3 lg:col-start-4 lg:col-span-6 md:col-span-10 sm:col-span-12 md:col-start-2">
            <div className="shadow-lg border-[1px] border-gray-500 rounded-md p-5">
                <textarea className="border-[1px] border-gray-500 resize-y rounded-md outline-none p-3 w-full" name="body" style={{maxWidth:'100%'}} onChange={handleInput}></textarea>
                <Link href="/posts"><button className="btn !m-0" onClick={handleClick}>Submit</button></Link>
            </div>
        </div>
     );
}

export default CreatePost;