import g1 from './galeri1.jpg';
import g2 from './galeri2.jpg';
import g3 from './galeri3.jpg';
import g4 from './galeri4.jpg';
import g5 from './galeri5.jpg';
import g6 from './galeri6.jpg';
import "./Galeri.css";
import React from 'react'

function Galeri() {
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"orange"}}><b>Galeri</b></h3>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 " >
                <img src={g1} className="d-block img-responsive w-100 galpho" title="temizlik" alt="temizlik" ></img>
               
           
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 " >
                <img src={g2} className="d-block img-responsive w-100 galpho" title="ilaçlama" alt="koltuk-yıkama" ></img>
                
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 " >
                <img src={g3} className="d-block img-responsive w-100 galpho" title="merdiven" alt="merdiven"></img>
               
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" >
                <img src={g4} className="d-block img-responsive w-100 galpho" title="araç-yıkama" alt="araç yıkama"></img>
               
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" >
                <img src={g5} className="d-block img-responsive w-100 galpho" title="halı yıkama" alt="halı" ></img>
                
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" >
                <img src={g6} className="d-block img-responsive w-100 galpho" title="yurt temizlik" alt="yurt" ></img>
                
            </div>
            


        </div>
        </div>
    )
}

export default Galeri

