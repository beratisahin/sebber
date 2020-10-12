import Insaat from './insaat.jpg';
import React from 'react'

function InsaatSonrasiTemizlik() {
    return (
        <div className="col-12">
            
            <div className="card mt-4" style={{align:"center",backgroundColor:"lightgray"}}>
                <img src={Insaat} class="card-img-top" alt="İnşaat Sonrası Temizlik" style={{width:"80%",height:"30%",margin:"auto"}}></img>
                <div class="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>İnşaat Sonrası Temizlik</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>İnşaat ya da tadilat sonrası oluşabilecek kaba ya da ince her türlü temizlği ekiplerimiz tarafından itina ile gerçekleştiriyoruz. İnşaat ve tadilat işleri sonucunda oluşacak çöpler molozlar gözünüzü korkutmasın en ince ayrıntısına kadar temizlik işlerinizi tamamlayıp size teslim ediyoruz.</p>
                   
                    
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default InsaatSonrasiTemizlik
