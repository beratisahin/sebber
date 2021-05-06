import Halı from "./halı.jpg";
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function HaliYikama() {
    useDocumentTitle('Halı Yıkama - Samsun Profesyonel Temizlik');
    return (
        <div className="col-12">
        <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
            <img src={Halı} class="hizmet-photo" title="Halı Yıkama" alt="Halı Yıkama" ></img>
            <div className="card-body col-12">
                <br/>
                <p class="hizmet-title" >Halı Yıkama</p>
                <p class="hizmet-text" >Çocularınızın üzerinde emeklediği ve en çok bakteri barındıran alanların başında olan halılarınızın hijyeni sağlamaktayız. Evlerimizin vazgeçilmez eşyalarından olan halılarımızı yıkama işlemlerini ekiplerimiz profesyonel bir şekilde en kaliteli makinalarmızla yerine getiriyoruz. 
                Belirttiğiniz adresten halılarınızı teslim alıp naylona sarılmış şekilde ayağınıza kadar getirip teslim ediyoruz.</p>    
            </div>
        </div>
    </div>
    )
}

export default HaliYikama
