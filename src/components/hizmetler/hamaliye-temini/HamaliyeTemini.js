import Hamaliye from "./hamaliye.jpg";
import React from 'react'

function HamaliyeTemini() {
    return (
        <div className="col-12">
        <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
            <img src={Hamaliye} class="hizmet-photo" title="Hamaliye Temini" alt="Hamaliye Temini" ></img>
            <div className="card-body col-12">
                <br/>
                <p class="hizmet-title" >Hamaliye Temini</p>
                <p class="hizmet-text" >Evden eve nakliyat ve küçük çaplı eşya taşıma işlemleriniz için personel talebinde bulunup işlerinizi çözüme kavuştururuz. 
                Size bir telefon kadar uzaktayız, siz yorulmayın biz sizler için her türlü işi sırasıyla yerine getirip eşyalarınızı evlerinize, ofisinize yerleştiriyoruz.</p>    
            </div>
        </div>
    </div>
        
    )
}

export default HamaliyeTemini
