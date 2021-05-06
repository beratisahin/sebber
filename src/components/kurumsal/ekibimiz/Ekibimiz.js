import mr from "./st_mr.jpg";
import mrs from "./st_mrs.jpg";
import './ekibimiz.css';
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function Ekibimiz() {
    useDocumentTitle('Ekibimiz - Samsun Profesyonel Temizlik');
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"orange"}}><b>Ekibimiz</b></h3>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={mr} className="d-block img-responsive w-100 ekippho" title="temizlik" alt="temizlik" ></img>
                <p class="ekip-text">1- Ali Sağlam </p>
           
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={mrs} className="d-block img-responsive w-100 ekippho" title="ilaçlama" alt="koltuk-yıkama" ></img>
                <p class="ekip-text">2- Zehra Sağlam  </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={mr} className="d-block img-responsive w-100 ekippho" title="merdiven" alt="merdiven"></img>
                <p class="ekip-text">3- Ahmet Sağlam</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={mrs} className="d-block img-responsive w-100 ekippho" title="araç-yıkama" alt="araç yıkama"></img>
                <p class="ekip-text" >4- Ayşe Sağlam</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={mr} className="d-block img-responsive w-100 ekippho" title="halı yıkama" alt="halı" ></img>
                <p class="ekip-text">5- Mehmet Sağlam</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ekiptemp" >
                <img src={mrs} className="d-block img-responsive w-100 ekippho" title="yurt temizlik" alt="yurt" ></img>
                <p class="ekip-text">6- Fatma Sağlam</p>
            </div>
            


        </div>
        </div>
    )
}

export default Ekibimiz
