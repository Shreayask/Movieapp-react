import React,{Component} from 'react';
import ReactCardCarousel from 'react-card-carousel'
import axios from 'axios';
import ContentDisplay from '../ContentDisplay/ContentDisplay';
import {img_300, unavailable} from '../../Config/Config';
import './style.css';
import {Route,Link} from 'react-router-dom';


class TrendSeries extends Component{
    state={
        SeriesContent:[],
        page :1
    }

    handlechange(e){
        let {name}=e.target
        let {page}=this.state

        if(name==="2"){
            this.setState({
                page : 2
            })

        }
         else if(name==="1"){
             this.setState({
                 page:1
             })
         }  

        else if(name==="3"){
            this.setState({
                page : 3
            })

        }
        else{
           if (page < 6){
               this.setState({
                   page : page + 1
               })
           }
           else
           {
               this.setState({
                   page : 5
               })
           }
        }
            
            
       this.componentDidMount()
        
        console.log("pg2",this.state.page)
    }
   
    


    componentDidMount(){
        let {page} =this.state;
       
        axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=62c50a883d0b869ae32be8312cd25579&page=${page}`)
        .then((response)=>{
            console.log("response",response);
            if(response.status.toString() === "200"){
                let datas = response.data;
                let data=datas.results
                this.setState({
                 SeriesContent: data
             })
 
            }
           
            console.log('state',this.state.SeriesContent)
 
            
        })
       
    }
    
   
  
  

    render(){
         let {SeriesContent}=this.state
        

        return(
            <div class="pages">
               
                <div class="trending">
                <div class="heading">
                       <div class="row" style={{width:"100%",paddingLeft:"1rem",backgroundColor:"#232e24"}}>
                           <div class="col col-lg-8" style={{marginBottom:"1.5rem"}} >

                           <h2 class="titles" >Trending Series </h2>
                           </div>
                       
                           <div class="col col-lg-4">
                           <div class="pagination" style={{marginTop:"2rem",marginLeft:"19rem"}}>
                    <nav aria-label="...">
  <ul class="pagination pagination-sm ">
    
    <li class="page-item " aria-current="page">
    
    <button class="page-link"  onClick={(e)=>{this.handlechange(e)}} name="1">1</button>
    </li>
    <li class="page-item"><button class="page-link "  onClick={(e)=>{this.handlechange(e)}} name="2">2</button></li>
    <li class="page-item"><button class="page-link"  onClick={(e)=>{this.handlechange(e)}} name="3">3</button></li>
    <li class="page-item">
      <button class="page-link"  aria-label="Next "  onClick={(e)=>{this.handlechange(e)}}>
        <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>

                    </div>

                           </div>
                           

                           </div>

                       </div>
                    <div class="row" style={{width:"100%",paddingLeft:"1rem"}}>
                    {SeriesContent && SeriesContent.map((c) => (
                    <div class=" col-lg-3 col-sm-12 col-md-6 d-flex ">
                        <Link to = {`/displaySeries?id=${c.id}&media=${c.media_type}&poster=${c.poster_path}&date=${c.first_air_date}&title=${c.name}&overview=${c.overview}&vote=${c.vote_average}`}>
                      <div class="card  text-white bg-dark mb-3" style={{height:"98%"}} >
                      <img class="poster" src={c.poster_path ? `${img_300}/${c.poster_path}` : unavailable } alt={c.name}/>
                
                <b class="title">{c.name} </b>
               
                <span class="description" style={{fontSize:"13px",marginBottom:"0.9rem"}}>Released: {c.first_air_date}</span>
                          
                          </div> 
                          </Link>
                          </div>)
                     )}
                     </div>

                </div>
              
    
                
    </div>
  
                
            
        )
    }
}

export default TrendSeries;