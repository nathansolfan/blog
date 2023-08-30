// const Bloglist = (props) => {
import { Link } from "react-router-dom";

const Bloglist = ({title,fruitprop}) =>{

    // const titolo = props.title
    // const fruitList = props.fruitprop  
    
    return (
        <div className="bloglist">
            <h1>{title}</h1>
            
            {fruitprop.map((propFruta)=> (
            <div className="listfruta" key={propFruta.id}>
                <Link to={`/blogs/${propFruta.id}`} >
                <p>{propFruta.title}</p>              
                </Link>
                <p>{propFruta.body}</p>              
            </div>
        ))}
        </div>
      );
}
 
export default Bloglist;