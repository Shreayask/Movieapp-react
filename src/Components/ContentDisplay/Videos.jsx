import React ,{Component} from 'react';
import axios from 'axios';
import './ContentDisplay.css';

class Videos extends Component{

    state={
        id : this.props.id,
        media: this.props.media,
        content:[],
        status: true
      
    }


    fetchVideo=(e)=>{
      let {id,media}=this.state;
     
     this.setState({
         status: false
     })

      axios.get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=62c50a883d0b869ae32be8312cd25579&language=en-US`)
      .then((response)=>{
          console.log("response",response);
          console.log('idmove',this.state.id)
          
          if(response.status.toString() === "200"){
              let datas = response.data;
              let data=datas.results
              let clips= data.slice(0,6)
              this.setState({
               content: clips
           })

          }
         
          console.log('state',this.state.MovieContent)

          
      })
     
      

    }

    render(){
        console.log("vidoe",this.state.id)
        let {id,media_type,content}=this.state;
        return(
            <div>

                <button type="button" class="btn btn-info" style={{width:"30%"}} onClick={(e)=>{this.fetchVideo(e)}}>Watch Movie Clips </button>
                 {content.length && (this.state.status===false)?( <div>
                     <div class="row" style={{width:"100%",marginTop:"2rem"}}>   
                     {content.map((items)=>{
                         return(
                             
                                  <div class=" col-lg-4 col-sm-12 col-md-6 d-flex ">
                           <a class="clips" href={`https://www.youtube.com/watch?v=${items.key}`} target="_blank" >
                      <div class="card  text-white bg-dark mb-3" style={{height:"100%",marginBottom:"0.5rem"}}  >
                      <a class="card-link" href={`https://www.youtube.com/watch?v=${items.key}`} target="_blank">
                      <img class="poster" src="https://www.androidpolice.com/wp-content/uploads/2020/10/07/YouTubeOutlineIconHero-01.png"
                       alt={items.type} style={{width:"100%"}}/></a>
                         
                      
                
                <p style={{fontSize:"13px",color:"yellow"}}>{items.name}  </p>
                <b style={{fontSize:"11px",color:"white"}}> {items.type} </b>
             </div> 
             </a>
                          
                          </div>

                         )

                     })}
                     </div>

                 </div>):(<div>
                  {this.state.status===true?(
                      <div> </div>
                  ):(
                      <div> <h5 style={{color:"white",marginTop:"3rem"}}>No Videos Available</h5></div>
                  )}
                      
                     
                 </div>)}
                
                



            </div>
        )
    }
}

export default Videos;