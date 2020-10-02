import './Services.css';
import React, { Component } from 'react'

export default class Services extends Component {
    render() {
           //Destructing
           const {title,text,divert}=this.props;
           return (

                   <div className="row" >
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" style={{width:"24rem",height:"250px",backgroundColor:"lightskyblue",float:"left",margin:"10px",padding:"20px",borderRadius:"10px"}}>
                                <h3 class="card-title" style={{color:"darkblue"}}>{title}</h3>
                                <p class="card-text" style={{fontSize:"16px"}}>{text}</p>
                                <a href={divert} class="btn btn-primary" style={{fontSize:"17px"}}>Daha Fazla Bilgi</a>

                        </div>

                   </div>






               //<h3 style={{textAlign:"center",color:"red"}}>Nabvar App</h3>
               //  <div class="card-body" style={{float:"left",display:"inline"}}>
               
               /*
                <div class="card text-center" style={{width:"24rem",height:"20%",backgroundColor:"lightskyblue",float:"left"}}>
                  <div class="card-body" style={{textAlign:"center"}}>
                                <h3 class="card-title" style={{color:"darkblue",margin:"5px"}}>{title}</h3>
                                <p class="card-text" style={{fontSize:"14px"}}>{text}</p>
                                <a href="#" class="btn btn-primary">Daha Fazla Bilgi</a>
                    </div>
                    &nbsp;
               </div>
               
               */

           )
    }
}
