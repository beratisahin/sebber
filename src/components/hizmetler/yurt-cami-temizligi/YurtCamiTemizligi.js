import Yurt from "./yurt.jpg";
import React from 'react'

function YurtCamiTemizligi() {
    return (
        <div className="col-12">
            <div className="card mt-4 mb-3" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Yurt} class="card-img-top" alt="Yurt-Cami-Okul Temizliği" style={{width:"80%",height:"30%",margin:"auto",marginTop:"5px"}}></img>
                <div className="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Yurt-Cami-Okul Temizliği</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>Öğrencilerimizin kaldığı yurt pansiyon okul gibi alanlarda en iyi şekilde hijyen koşullarını yerine getirip hizmet sağlamaktayız. Böylelikle öğrencilerimiz asıl odaklanmaları gereken derslerine sağlıklı ve hijyenik bir ortamda gönül rahatlığı ile çalışabilirler.</p>
                   
                    
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default YurtCamiTemizligi
