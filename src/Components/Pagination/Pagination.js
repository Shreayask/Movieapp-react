import React, {Component} from 'react';

class Pagination extends Component{

   


    render(){
       
        return(
            <div>
                <nav aria-label="..." >
  <ul class="pagination">
    <li class="page-item disabled">
     <button name="prev" ><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>  </button> 
    </li>
    <li class="page-item">
        <button onClick= {(e) => this.props.handlePage(e)} name="1" > 1</button></li>
    <li class="page-link" aria-current="page">
     <button onClick= {(e) => this.props.handlePage(e)} name="2"> 2 </button> 
    </li>
    <li class="page-item">
        <button onClick= {(e) => this.props.handlePage(e)} name="3">3 </button></li>
    <li class="page-item">
     <button onClick= {(e) => this.props.handlePage(e)} name="next"> Next </button> 
    </li>
  </ul>
</nav>
            </div>
        )
    }
}

export default Pagination;