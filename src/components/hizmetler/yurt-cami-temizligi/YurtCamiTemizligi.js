import Yurt from "./yurt.jpg";
import React from 'react'

function YurtCamiTemizligi() {
    return (
        <div>
            <div className="card mt-4 mb-3" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Yurt} class="card-img-top" alt="Yurt-Cami-Okul Temizliği" style={{width:"80%",height:"30%",margin:"auto",marginTop:"5px"}}></img>
                <div className="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Yurt-Cami-Okul Temizliği</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>Daire, Rezidans, Villalarınızın Profesyonel ekibimiz ile Detaylı Temizlik ve dezenfektan İşlemleri Uzman Personellerimizce Gerçekleştirilmektedir. </p>
                   
                    
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default YurtCamiTemizligi
