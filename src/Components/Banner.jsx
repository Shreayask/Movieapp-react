import React,{Component} from "react";

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import axios from 'axios';
import {  img_500 } from "../Config/Config";
import {Carousel} from 'react-responsive-carousel';

class Banner extends Component{

    state={
        MovieContent:[],
        SeriesContent:[]
    }

    componentDidMount(){
        let {page} =this.state;
       
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=62c50a883d0b869ae32be8312cd25579&page=1`)
        .then((response)=>{
            console.log("M_response",response);
            if(response.status.toString() === "200"){
                let datas = response.data;
                let data=datas.results;
                let S_Content=data.slice(0,5)
                this.setState({
                 MovieContent: S_Content
             })
 
            }
           
            console.log('stateMovie',this.state.MovieContent)
 
            
        })
        
        axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=62c50a883d0b869ae32be8312cd25579&page=1`)
        .then((response)=>{
            console.log("tv_response",response);
            if(response.status.toString() === "200"){
                let datas = response.data;
                let data=datas.results
                let S_Content=data.slice(0,5)
                this.setState({
                 SeriesContent: S_Content
             })
 
            }
           
            console.log('state',this.state.SeriesContent)
 
            
        })
     
       
    }
    
   

   

    render(){
        let{MovieContent,SeriesContent}=this.state;
        return(
           
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} stopOnHover={false} showArrows={false}>
                {MovieContent && MovieContent.map((c)=>{

                    return(
                        <div class="pages" >
        
                        <img src={` https://image.tmdb.org/t/p/original/${c.poster_path}` }
                        style={{height:"92.8vh",objectFit:"initial"}} /> <br></br>
    
                         
                       
                    </div>
                    )
                })}

                {
                    SeriesContent && SeriesContent.map((c)=>{

                        return(
                            <div class="pages" >
        
                        <img src={` https://image.tmdb.org/t/p/original/${c.poster_path}` }
                        style={{height:"92.8vh",objectFit:"initial"}} /> <br></br>
    
                         
                       
                    </div>

                        )
                    })
                }
                
            </Carousel>
           
            
           
        )
    }
}
export default Banner;