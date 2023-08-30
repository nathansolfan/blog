import {useParams} from "react-router-dom"
import useFetch from "./usefetch";
import {useHistory} from "react-router-dom"

const BlogDetails = () => {

    const { id } = useParams()
    const {data:blogs, error, isPending}= useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'})
            .then(() => {
            history.push("/")
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>isLoading</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.body}</p>
                </article>
            )}
            <button onClick={handleClick}> Delete Blog man</button>
        </div>
      );
}
 
export default BlogDetails
