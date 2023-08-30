import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {

// useEffect(()=>{
//     console.log("does it run?")
// },[name])


const {data : fruit, isPending, error} = useFetch('http://localhost:8000/blogs')


    return ( 
        <div>
        {error && <div>{error}</div> }
        {isPending && <div>It is loading</div> }
        {fruit && <Bloglist fruitprop={fruit} title="Home page"/>}
        </div>
     );
}
 
export default Home;