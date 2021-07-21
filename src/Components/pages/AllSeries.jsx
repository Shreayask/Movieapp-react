import React,{Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';
import axios from 'axios';
import {img_300, unavailable} from '../../Config/Config';
import './style.css';
import SearchSeries from '../Search/SearchSeries';
import GenreTv from '../Genre/GenreTv';
import {Route,Link} from 'react-router-dom';
 
class AllSeries extends Component{

  state={
      SeriesContent:[],
      page : 1,
      genre: "",
      series:"",
      search:"",
      Content:[]
  }
    

  
  handleGenre=(e)=> {
       
    var{name,value}=e.target;
   
    console.log("gens",value);
    this.setState({
        genre : value,
        series: ""
    })
  
     
     console.log("fff",this.state.genre)   
}


handleSearch=(e)=>{
    let {value}=e.target
    let{search}=this.state
   this.setState({
        search : value
    })
    console.log("search",this.state.search)

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
   
        
   
    console.log("pg2",this.state.page)
}


fetchsearch=(e)=>{
       
    let {search,series} =this.state;
    this.setState({
        series : this.state.search
    })
    
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=62c50a883d0b869ae32be8312cd25579&language=en-US&query=${search}&page=1&include_adult=false`)
    .then((response)=>{
        console.log("response",response);
        console.log('inpage',this.state.page)
        console.log('genn',this.state.genre)
        if(response.status.toString() === "200"){
            let datas = response.data;
            let data=datas.results
            this.setState({
             Content: data,
             
         })

        }
       
        console.log('stateser',this.state.Content)

        
    })
   
}


 



    componentDidMount(){
        let {page,genre} =this.state;
        
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=62c50a883d0b869ae32be8312cd25579&language=en-US&sort_by=popularity.desc&page=${page}&&with_genres=${genre}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
        .then((response)=>{
            console.log("response",response);
            console.log('inpage',this.state.page)
            console.log('genn',this.state.genre)
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

    componentDidUpdate(prevProps, prevState){
        if ((prevState.genre !== this.state.genre) || (prevState.page !== this.state.page ))  {

            this.componentDidMount()
        }

        
    }


    render(){
        let {SeriesContent,search,series,Content}=this.state;
        let {media_type}= "tv";
        return(
            <div class="pages">
             
             <div class="movies">
                   <div class="heading">
                   
                       <div class="row" style={{width:"100%",paddingLeft:"1rem",backgroundColor:"#232e24"}}>
                       <h2 class="movietitle" > Series </h2>
                       <div class="col col-lg-6"  >
                    
                     <SearchSeries handleSearch={this.handleSearch} fetchsearch={this.fetchsearch}/>
                        

                      </div>
                  

                    
                   
                   <div class="col col-lg-3" >

                       <GenreTv  handleSelect={this.handleGenre} genre={this.state.genre} />



    </div>
<div class="col col-lg-3">
<div class="pagination" style={{marginTop:"1rem",marginLeft:"12rem"}}>
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

                   </div>
                   {(series.length===0 || search.length===0)?
                  (
                    <div class="row" style={{width:"100%",paddingLeft:"1rem"}}>
                    {SeriesContent && SeriesContent.map((c,index) => (
                       
                    <div class=" col-lg-3 col-sm-12 col-md-6 d-flex ">
                        
                        <Link to = {`/displaySeries?id=${c.id}&media=tv&poster=${c.poster_path}&date=${c.first_air_date}&title=${c.name}&overview=${c.overview}&vote=${c.vote_average}`}>
                     
                      <div class="card  text-white bg-dark mb-3" style={{height:"98%"}}  >
                      <img class="poster" src={c.poster_path ? `${img_300}/${c.poster_path}` : unavailable } alt={c.name}/>
                
                
                <span class="title">{c.name}</span>
                <span class="description" style={{fontSize:"13px",marginBottom:"0.9rem"}}>Released: {c.first_air_date}</span>
                          
                          </div> 
                         
                          </Link>

                         

                          </div>)
                     )}
                     </div>
                    
                  ):
                  (
                      
                    <div class="row" style={{width:"100%",paddingLeft:"1rem"}}>
                       
                    {(Content.length>0) ?  (Content.map((c) => (
                    <div class=" col-lg-3 col-sm-12 col-md-6 d-flex ">
                       <Link to = {`/displaySeries?id=${c.id}&media=tv&poster=${c.poster_path}&date=${c.release_date}&title=${c.name}&overview=${c.overview}&vote=${c.vote_average}`}>
                      <div class="card  text-white bg-dark mb-3" style={{height:"98%"}} >
                      <img class="poster" src={c.poster_path ? `${img_300}/${c.poster_path}` : unavailable } alt={c.name}/>
                
                      <span class="title">{c.name}</span>
                <span class="description" style={{fontSize:"13px",marginBottom:"0.9rem"}}>Released: {c.first_air_date}</span>
                          
                          </div> 
                          </Link>
                          
                          </div>)
                     )) : (<div class="container-fluid" style={{height:"100vh",color:"red"}}>

                            <h3 style={{marginTop:"9rem"}}>Not found</h3>

                     </div>)}
                     </div>

                  )}
            
            </div>
        )
    }
}

export default AllSeries;