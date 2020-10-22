import mr from "./st_mr.jpg";
import mrs from "./st_mrs.jpg";
import './ekibimiz.css';
import React from 'react'

function Ekibimiz() {
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h3 style={{textAlign:"center",color:"orange"}}><b>Ekibimiz</b></h3>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={mr} className="d-block img-responsive w-100" alt="logo" title="temizlik" style={{height:"400px"}}></img>
                <p class="card-text"><b>1- Mehmet SAĞLAM</b> </p>
          
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={mrs} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text"><b>2- Ayşe SAĞLAM</b>  </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={mr} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text"><b>3- Ahmet SAĞLAM</b></p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={mrs} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text" ><b>4- Fatma SAĞLAM</b></p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={mr} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text"><b>5- Ali SAĞLAM</b></p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={mrs} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text" ><b>6- Elif SAĞLAM</b></p>
            </div>
            
            


        </div>
        </div>
    )
}

export default Ekibimiz
