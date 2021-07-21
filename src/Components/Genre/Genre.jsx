import React, {Component} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

class Genre extends Component{

state={
    genres:[],
    genre1: ""
}




 componentDidMount(){
        let {page,genre} =this.state;
        
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=62c50a883d0b869ae32be8312cd25579&language=en-US`)
        .then((response)=>{
            console.log("response",response);
            console.log('genre',this.state.genres)
            if(response.status.toString() === "200"){
                let datas = response.data;
                let data=datas.genres
                this.setState({
                 genres : data
             })
 
            }
           
            console.log('genre',this.state.genres)
 
            
        })
       
    }

    
  render(){

        return(
            <div>
              
              <select class="form-select form-select-sm mb-4" aria-label=".form-select-lg example" 
                style={{marginTop:"1rem",width:"60%",marginLeft:"10rem",backgroundColor:"rgb(217, 223, 190)",height:"1.8rem"}}  
                onChange={(e) => {this.props.handleSelect(e)}}> 
                    
                    <option selected value=""> All Genre </option>
                   
                    {this.state.genres.map((items)=>{ 
                       
                      return( <option value={items.id}> {items.name} </option>)
                     
                     
                    })}



</select>
            </div>
        )
    }
}
export default Genre;