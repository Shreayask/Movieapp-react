import React,{Component}  from 'react';
import axios from 'axios';
import {img_300 , unavailable} from '../../Config/Config';

class SearchMovies extends Component{
state={
    search:"",
    Contents:[]
}



    render(){
           let{Contents}=this.state
        return( 
            
            <div class="d-flex" style={{marginTop:"0.8rem",marginLeft:"1rem"}}>
                          
          <input class="form-control " type="search" placeholder="Search Movies" aria-label="Search" onChange={(e)=>{this.props.handleSearch(e)}}
             />
<button class="btn btn-outline-info btn-sm" type="submit" onClick={(e)=>{this.props.fetchsearch(e)}}>
    <i class="bi bi-search"></i></button>

                   
</div>  

        )
    }
}

export default SearchMovies;