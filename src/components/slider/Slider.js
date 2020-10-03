import './Slider.css';
import logo1 from './st1.jpg';
import logo2 from './st2.jpg';
import logo3 from './st3.jpg';
import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (

        <div style={{display:"flex", justifyContent:"center"}}>
            <div id="slide" >
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src={logo1} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center"}}>Temizlik İmandandır</h4>
                         </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={logo2} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center"}}>Temizlik Ferahlatır.</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={logo3} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center"}}>Temizlik Arındırır.</h4>
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
