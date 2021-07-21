import React,{Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';

import AllMovies from './pages/AllMovies';
import Trend from './Trend';
import MovieNav from './MovieNav';
import Banner from './Banner';
import Navbar from './Navbar';
import Trendmovies from './pages/Trendmovies';

import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Movies extends Component{
    
   
  
  

    render(){
        
        

        return(
            <div class="page" >
              

            
             
             
            <MovieNav/>
             
             
            
           
                
              
    
                
    </div>
  
                
            
        )
    }
}

export default Movies;