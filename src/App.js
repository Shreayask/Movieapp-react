import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Banner from './Components/Banner';
import MovieNav from './Components/MovieNav';
import Trendmovies from './Components/pages/Trendmovies';
import ContentDisplay from './Components/ContentDisplay/ContentDisplay';
import AllSeries from './Components/pages/AllSeries';
import AllMovies from './Components/pages/AllMovies';
import SeriesNav from './Components/SeriesNav';
import TrendSeries from './Components/pages/TrendSeries';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <div>
    
    
   
        <Switch>
          <Route path="/" exact>
            <Navbar/>
            <Banner/>
              
          </Route>

          <Route path="/movies" exact>
            <MovieNav/>
          <AllMovies/>
                </Route>
               
              <Route path="/movies/trending"> 
              <MovieNav/>
              <Trendmovies/>
              </Route>
              
              <Route path="/movies/allmovies">
              <MovieNav/>
                <AllMovies/>
                </Route>

                <Route path="/display">
                <MovieNav/>
                <ContentDisplay/>
                </Route>
                  
                  
                <Route path="/displaySeries">
                <SeriesNav/>
                <ContentDisplay/>
                </Route>
                  
          
          
          <Route path="/series" exact>
           <SeriesNav/>
           <AllSeries/>
          </Route>

          <Route path="/series/trendingseries"> 
             <SeriesNav/>
              <TrendSeries/>
              </Route>
              
              <Route path="/series/allseries">
             <SeriesNav/>
                <AllSeries/>
                </Route>


        </Switch>


    </div>
    
    
    </BrowserRouter>
     
      


     

    </div>
  );
}

export default App;
