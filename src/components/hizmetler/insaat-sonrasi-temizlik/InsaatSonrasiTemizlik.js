import Insaat from './insaat.jpg';
import React from 'react'

function InsaatSonrasiTemizlik() {
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Insaat} class="hizmet-photo" title="İnşaat Sonrası Temizlik" alt="İnşaat Sonrası Temizlik" ></img>
                <div className="card-body col-12">
                    <br/>
                    <p class="hizmet-title" >İnşaat Sonrası Temizlik</p>
                    <p class="hizmet-text" >İnşaat ya da tadilat sonrası oluşabilecek kaba ya da ince her türlü temizlği ekiplerimiz araacılığıyla itina ile gerçekleştiriyoruz. 
                    İnşaat ve tadilat işleri sonucunda oluşacak çöpler molozlar gözünüzü korkutmasın en ince ayrıntısına kadar temizlik işlerinizi tamamlayıp size teslim ediyoruz.</p>    
                </div>
            </div>
        </div>
    )
}

export default InsaatSonrasiTemizlik
