import './Services.css';
import { Link } from "react-router-dom";
import React, { Component } from 'react';


export default class Services extends Component {
      
    render() {
           //Destructing
           const {photo,title,text,divert}=this.props;
           return (

                   <div>
                        <div className="col-12 m-4 pl-5 pr-5 pt-2 pb-2 card-temp" style={{backgroundColor:"#BEE6FD",borderRadius:"1rem",textAlign:"center",height:"40rem",border:"2px darkblue solid"}}>
                                <img src={photo} className="card-photo" alt="..." style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
                                <p class="card-title" style={{color:"darkblue",fontSize:"large",marginTop:"1rem"}}>{title}</p>
                                <p class="card-text" style={{fontSize:"small",textAlign:"justify"}}>{text}</p>
                                
                                <a class="btn btn-primary buton" ><Link className="more" to={divert} style={{color:"white",fontSize:"medium"}}>Daha Fazla Bilgi</Link></a>

                        </div>

                   </div>


           

           )
    }
}
