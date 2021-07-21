import React, {Component} from 'react';

import './ContentDisplay.css';
import {useLocation} from 'react-router-dom';
import Videos from './Videos';
import {unavailableLandscape, unavailable} from '../../Config/Config';



export default function  ContentDisplay() {

    
    const queryParams =new URLSearchParams(useLocation().search);
    const id = queryParams.get('id');
    const name = queryParams.get('title') , poster= queryParams.get('poster'), date=queryParams.get('date'),
    overview= queryParams.get('overview'), vote=queryParams.get('vote')
    const media= queryParams.get('media');
   


        return(
            <div class="pages" >
                <div class="medias"> 
                <div class="row" style={{width:"100%"}}>
                <div class=" col-lg-6  col-md-6 d-flex " >
                  
                     <div class="posters"> 
                     <img src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : "https://i.mydramalist.com/3LmgDf.jpg" } alt={name}
                     style={{height:"100%"}}/>
                     </div>
                         
                       </div> 
                       <div class=" col-lg-6  col-md-6  ">
                  <div class="title"><h1>{name} </h1></div>

                  <div class="details">
                      <p><span class="span">Released date:</span> {date}</p>
                      <p><span class="span">Description: </span> {overview}</p>
                      <p><span class="span">Average Vote:</span> {vote}</p>

                  </div>

                  <div class="video">
                      <Videos  id={id} media={media}/>

                  </div>
                     
                         
                       </div>
                       </div>

                       </div>
                       </div>

                
           
        )
     
}
