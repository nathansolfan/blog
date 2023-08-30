import { useState } from "react";
import { useHistory} from "react-router-dom"

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario')
    const [isPending, setIsPending]= useState(false)
    const history = useHistory()
    

   

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true)
        
        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("new blog added")
            setIsPending(false)
            // history.go(-1)
            history.push("/")
        })
        console.log(blog)
    }

    return ( 
        <div className="create">
            <h2>Create new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                 
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >                    
                </textarea>
                 
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}                
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>adding blog</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                
            </form>
            </div>
     );
}
 
export default Create;