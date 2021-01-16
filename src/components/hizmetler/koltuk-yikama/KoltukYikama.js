import Koltuk from "./koltuk.jpg";
import React from 'react'

function KoltukYikama() {
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Koltuk} class="hizmet-photo" title="Yerinde Koltuk Yıkama" alt="Yerinde Koltuk Yıkama" ></img>
                <div className="card-body col-12">
                    <br/>
                    <p class="hizmet-title" >Yerinde Koltuk Yıkama</p>
                    <p class="hizmet-text" >Evinizde bulunan ya da araç koltuklarınızı yerinde detaylı bir şekilde temizleyip ilk günki kondisyonuna dönüştürüyoruz. 
                    Deforme olmuş, aşırı kire bulaşmış koltuklarınızı profesyonel temizleme makinalarımızla yerinde temizleme imkanımız bulunmaktadır.</p>    
                </div>
            </div>
        </div>
    )
}

export default KoltukYikama
