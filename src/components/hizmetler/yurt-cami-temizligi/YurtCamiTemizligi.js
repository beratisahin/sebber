import Yurt from "./yurt.jpg";
import React from 'react'

function YurtCamiTemizligi() {
    return (
        <div className="col-12">
        <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
            <img src={Yurt} class="hizmet-photo" title="Yurt-Cami-Okul Temizliği" alt="Yurt-Cami-Okul Temizliği" ></img>
            <div className="card-body col-12">
                <br/>
                <p class="hizmet-title" >Yurt-Cami-Okul Temizliği</p>
                <p class="hizmet-text" >Öğrencilerimizin kaldığı yurt pansiyon okul gibi alanlarda en iyi şekilde hijyen koşullarını yerine getirip hizmet sağlamaktayız. 
                Böylelikle öğrencilerimiz asıl odaklanmaları gereken derslerine sağlıklı ve hijyenik bir ortamda gönül rahatlığı ile çalışabilirler.</p>    
            </div>
        </div>
        
    </div>
    )
}

export default YurtCamiTemizligi
