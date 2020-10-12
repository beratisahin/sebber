import Koltuk from "./koltuk.jpg";
import React from 'react'

function KoltukYikama() {
    return (
        <div className="col-12">
            <div className="card mt-4 mb-3" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Koltuk} class="card-img-top" alt="Koltuk Yıkama" style={{width:"80%",height:"30%",margin:"auto",marginTop:"5px"}}></img>
                <div className="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Yerinde Koltuk Yıkama</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>Evinizde bulunan ya da araç koltuklarınızı yerinde detaylı bir şekilde temizleyip ilk günki kondisyonuna dönüştürüyoruz. Deforme olmuş, aşırı kire bulaşmış koltuklarınızı profesyonel temizleme makinalarımızla yerinde temizleme imkanımız bulunmaktadır. </p>
                   
                    
                    <br/>
                </div>
            </div>
            

        </div>
    )
}

export default KoltukYikama
