import Evtem from "./ev.jpg";
import React from 'react'


function EvTemizligi() {
    return (
    <div className="col-12">
        <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
            <img src={Evtem} class="hizmet-photo" title="Ev temizliği" alt="Ev Temizliği" ></img>
            <div className="card-body col-12">
                <br/>
                <p class="hizmet-title" >Ev Temizliği</p>
                <p class="hizmet-text" >Evde temizlik yapmak için zaman ve imkan bulamayan müşterilerimiz için düzenli olarak ev temizliği hizmetimiz bulunmaktadır. Evlerinizin her bir köşesi en ince ayrıntısına kadar temizlenip size teslim edilir. 
                Hizmetimizden memnun kalmanız bizim önceliğimizdir, geri dönüşleriniz olumlu oluncaya değin hizmetimizin devam edeceğinin garantisini verebiliriz.</p>    
            </div>
        </div>
    </div>
    )
}

export default EvTemizligi
