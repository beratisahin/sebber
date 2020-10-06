import Ofis from './ofis.jpg';
import React from 'react'

function OfisTemizligi() {
    return (
        <div>
            <div className="card mt-4 mb-3" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Ofis} class="card-img-top" alt="Ofis Temizliği" style={{width:"80%",height:"30%",margin:"auto",marginTop:"5px"}}></img>
                <div className="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Ofis Temizliği</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>Çalışma Alanlarınızda Temizliğinizi Önemsiyor Siz Değerli Müşterilerimizin Çalışma Alanlarında Kaparak Evlerinizde sevdiklerinize Her türlü Mikrop ve Bakterileri Taşımamanız için Temizlik Sonrası Dezenfektan Uygulaması Gerçekleştiriyoruz.</p>
                   
                    
                    <br/>
                </div>
            </div>
            
        </div>
    )
}


export default OfisTemizligi
