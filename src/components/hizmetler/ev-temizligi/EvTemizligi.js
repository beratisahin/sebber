import Evtem from "./ev.jpg";
import React from 'react'


function EvTemizligi() {
    return (
        <div className="col-12">
            
            
            <div className="card mt-4 mb-3" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Evtem} class="card-img-top" alt="Ev Temizliği" style={{width:"80%",height:"30%",margin:"auto",marginTop:"5px"}}></img>
                <div className="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Ev Temizliği</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>Evde temizlik yapmak için zaman ve imkan bulamayan müşterilerimiz için düzenli olarak ev temizliği hizmetimiz bulunmaktadır. Evlerinizin her bir köşesi en ince ayrıntısına kadar temizlenip size teslim edilir. Hizmetimizden memnun kalmanız bizim önceliğimizdir, geri dönüşleriniz olumlu oluncaya değin hizmetimizin devam edeceğinin garantisini verebiliriz.</p>
                   
                    
                    <br/>
                </div>
            </div>
           

        </div>
    )
}

export default EvTemizligi
