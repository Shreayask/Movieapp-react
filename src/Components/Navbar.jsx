import React,{Component} from "react";
import {Switch, Route,NavLink} from 'react-router-dom';


class Navbar extends Component{

   

    render(){
        return(
            <div >
             


                <nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-dark  " >
  <div class="container-fluid">
  
      <ul class="nav me-auto">
      <li >
         <NavLink to="/" class="navbar-brand"> <img src="https://pbs.twimg.com/profile_images/517326018177011712/XwrARxbO.png" 
    alt="logo" class="rounded-circle"  style={{height:"2rem",width:"5rem",marginLeft:"0.039rem"}}/></NavLink>
           </li>
         
           <li class="nav-item">
         <NavLink to="/movies" >MOVIES</NavLink>
           </li>  &nbsp; &nbsp;
           <li class="nav-item">
         <NavLink to="/series" >SERIES</NavLink>
           </li>


      </ul>
  
  </div>
</nav>
            </div>
        )
        }


}
export default Navbar;
