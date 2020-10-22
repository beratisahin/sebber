import g1 from './galeri1.jpg';
import g2 from './galeri2.jpg';
import g3 from './galeri3.jpg';
import g4 from './galeri4.jpg';
import g5 from './galeri5.jpg';
import g6 from './galeri6.jpg';
import React from 'react'

function Galeri() {
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h4 style={{textAlign:"center"}}><b>Galerimiz</b></h4>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g1} className="d-block img-responsive w-100" title="halı-yıkama" alt="ev" style={{height:"400px"}}></img>
          
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g2} className="d-block img-responsive w-100" title="merdiven" alt="ofis" style={{height:"400px"}}></img>
          
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g3} className="d-block img-responsive w-100" title="koltuk" alt="merdiven" style={{height:"400px"}}></img>
          
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g4} className="d-block img-responsive w-100" title="apartman" alt="nakliye" style={{height:"400px"}}></img>
          
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g5} className="d-block img-responsive w-100" title="villa" alt="yazlık" style={{height:"400px"}}></img>
          
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px",marginBottom:"10px"}}>
                <img src={g6} className="d-block img-responsive w-100" title="dezenfektan" alt="temizlik" style={{height:"400px"}}></img>
          
            </div>
            


        </div>
        </div>
    )
}

export default Galeri

