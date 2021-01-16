import './Slider.css';
import house from './home.jpg';
import armchair from './armchair.jpg';
import upstair from './disenfection.jpg';
import office from './dormitory.jpg';
import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (

        <div style={{display:"flex", justifyContent:"center"}}>
            <div id="slide" >
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src={house} className="d-block img-responsive w-100 slidephoto" title="ev temizliği" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Profesyonellik</h4>
                         </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={armchair} className="d-block img-responsive w-100 slidephoto" title="koltuk yıkama" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Kurumsallık</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={upstair} className="d-block img-responsive w-100 slidephoto" title="merdiven temizliği" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Mükemmellik</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={office} className="d-block img-responsive w-100 slidephoto" title="ofis temizliği" alt="logo" style={{height:"40rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Güvenilirlik</h4>
                        </div>
                       
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
           
        )
    }
}
