import Dezenfekte from "./dezenfektan.jpg";
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function Dezenfektan() {
    useDocumentTitle('Dezenfektan ile İlaçlama - Samsun Profesyonel Temizlik')
    return (
    <div className="col-12">
        <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
            <img src={Dezenfekte} class="hizmet-photo" title="Dezenfektan ile İlaçlama" alt="Dezenfektan ile İlaçlama" ></img>
            <div className="card-body col-12">
                <br/>
                <p class="hizmet-title" >Dezenfektan ile İlaçlama</p>
                <p class="hizmet-text" >Kaliteli dezenfektan ürünlerimiz ile bulunduğunuz ortamları en ince ayrıntısına kadar temizleyip Covid-19 virüsünden sizi uzak tutuyoruz. Özellikle bu virüs döneminde dezenfektanların önemi oldukça artmıştır. 
                Turnike girişleri gibi çok aktif bir şekilde temas edilen alanların hijyenini sağlıyoruz.</p>    
            </div>
        </div>
    </div>
    )
}

export default Dezenfektan
