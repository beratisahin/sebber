import Halı from "./halı.jpg";
import React from 'react'

function HaliYikama() {
    return (
        <div className="col-12">
            
            <div className="card mt-4 mb-3" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Halı} class="card-img-top" alt="Ev Temizliği" style={{width:"80%",height:"30%",margin:"auto",marginTop:"5px"}}></img>
                <div className="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Halı Yıkama</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>Çocularınızın üzerinde emeklediği ve en çok bakteri barındıran alanların başında olan halılarınızın hijyeni sağlamaktayız. Evlerimizin vazgeçilmez eşyalarından olan halılarımızı yıkama işlemlerini ekiplerimiz profesyonel bir şekilde en kaliteli makinalarmızla yerine getiriyoruz. Belirttiğiniz adresten halılarınızı teslim alıp naylona sarılmış şekilde ayağınıza kadar getirip teslim ediyoruz. </p>
                   
                    
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default HaliYikama
