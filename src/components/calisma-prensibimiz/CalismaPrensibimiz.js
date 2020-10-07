import "./CalismaPrensibimiz.css";
import g1 from './galeri1.jpg';
import g2 from './galeri2.jpg';
import g3 from './galeri3.jpg';
import g4 from './galeri4.jpg';
import g5 from './galeri5.jpg';
import g6 from './galeri6.jpg';
import React from 'react'

function CalismaPrensibimiz() {
    return (
        <div className="row mr-4" style={{marginLeft:"10px"}} >
        <div style={{marginTop:"10px",marginBottom:"10px",justifyContent:"flex-end !important"}}>
            <h4 style={{textAlign:"center"}}><b>Çalışma Prensibimiz</b></h4>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g1} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text">1- Elemanlarımızın Tamamı Hijyen Şartlarına Uygun Kıyafet ve Ekipmanlar ile Çalıştırılmaktadır.</p>
          
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g2} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text">2- Bütün İşlerinizde Kullanılan Temizlik, İlaçlama Araçlar Piyasadaki Kaliteli Ürünlerdir.  </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g3} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text">3- İş Öncesi ve Sonrası Firmamız Tarafından Müşteri Memnuniyeti için Geri Bildirim Alınır..</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g4} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text" >4- Yapılan Bütün İşleriniz Anlaşmalı Sigorta Şirketimiz Tarafından Garantiye Alınmıştır. </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g5} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text">5- İlaçlama İşlemlerinde Periyodik Olarak Ekibimiz Ücretsiz Olarak Destek Vermektedir.</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" style={{border:"1px solid lightgreen",borderRadius:"10px"}}>
                <img src={g6} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                <p class="card-text">6- Uygulama ve Kontrol personellerimiz Ayrı Ekipler ve Kişilerle Periyodik Takip Edilmektedir.</p>
            </div>
            


        </div>
        </div>
    )
}

export default CalismaPrensibimiz
