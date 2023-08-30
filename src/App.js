import BlogDetails from './Blogdetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import About from './About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Weather from './Weather';



function App() {
  return (
    <Router>
      <div className="navbar">
      <Navbar/>
      </div>
      <div>
        <Switch>
          <Route exact path="/">

            <div className="content">
            <Home/>
            </div>
            
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails/>            
          </Route>
          
          <Route path="/about" >
              <About/>
          </Route>

          <Route path="/weather">
            <Weather/>
          </Route>

        </Switch>   
      </div>
    </Router>
  );
}

export default App;
