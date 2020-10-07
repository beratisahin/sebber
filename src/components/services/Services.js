import './Services.css';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Services extends Component {
    render() {
           //Destructing
           const {title,text,divert}=this.props;
           return (

                   <div>
                        <div className="col-12 m-4 pl-5 pr-5 pt-2 pb-2" style={{backgroundColor:"lightskyblue",borderRadius:"10px",textAlign:"center"}}>
                                <h3 class="card-title" style={{color:"darkblue"}}>{title}</h3>
                                <p class="card-text" style={{fontSize:"16px"}}>{text}</p>
                                
                                <a class="btn btn-primary" ><Link to={divert} style={{color:"white",fontSize:"18px"}}>Daha Fazla Bilgi</Link></a>

                        </div>

                   </div>

           )
    }
}
