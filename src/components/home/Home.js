import React from "react";
import "./Home.css";
import Services from "../services/Services";
import Slider from "../slider/Slider";
import p1 from "../hizmetler/dezenfektan/dezenfektan.jpg";
import p2 from  "../hizmetler/ofis-temizligi/ofis.jpg";
import p3 from "../hizmetler/ev-temizligi/ev.jpg";
import p4 from "../hizmetler/hamaliye-temini/hamaliye.jpg";
import p5 from "../hizmetler/koltuk-yikama/koltuk.jpg";
import p6 from "../hizmetler/hali-yikama/halı.jpg";
import p7 from "../hizmetler/merdiven-temizligi/merdiven.jpg";
import p8 from "../hizmetler/yurt-cami-temizligi/yurt.jpg";
import p9 from "../hizmetler/insaat-sonrasi-temizlik/insaat.jpg";

function Home() {
  return (
    <div>
      <div className="col-12 mt-4 p-0" style={{ borderRadius: "1rem" ,width:"80%",display:"block",align:"center",margin:"auto"}}>
        <Slider />
      </div>

      <div className="row mr-4 servicebox">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p1}
            title="Dezenfekte Hijyen"
            text="Kaliteli dezenfektan ürünlerimiz ile bulunduğunuz ortamları en ince ayrıntısına kadar temizleyip Covid-19 virüsünden sizi uzak tutuyoruz..."
            divert="/dezenfektan-ile-ilaclama"


          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p2}
            title="Ofis Temizliği"
            text="Ofis ortamı gibi toplu çalışma alanlarında hijyen ile sağlığın ne kadar önemli olduğunu biliyor, müşterilere en güzel hizmeti sağlıyoruz..."
            divert="/ofis-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p6}
            title="Halı Yıkama"
            text="Çocuklar ve bebeklerin üzerinde oynadığı, en çok bakteri barındıran alanların başında olan halılar ve kilimlerin hijyenini sağlamaktayız..."
            divert="/hali-yikama"
          />
        </div>

       

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p4}
            title="Hamaliye Temini"
            text="Evden eve nakliyat ve küçük çaplı eşya taşıma işlemlerinizde, eşyalara zarar vermeden güvenle taşır istenilen yere zamanında ulaştırırız..."
            divert="/hamaliye-temini"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p5}
            title="Koltuk Yıkama"
            text="Evinizde bulunan oturma takımları veya araç koltuklarını yerinde detaylıca temizleyip yeni alınmış gibi tertemiz bir hale dönüştürüyoruz..."
            divert="/yerinde-koltuk-yikama"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p3}
            title="Ev Temizliği"
            text="Evde temizlik yapmak için zaman ve imkan bulamayan müşterilerimize ayrıntılı temizlik hizmetini sizleri memnun edecek şekilde sağlıyoruz..."
            divert="/ev-temizligi"
          />
        </div>

        

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p7}
            title="Merdiven Temizliği"
            text="Topluca yaşanılan apartman, okul, yurt, ofis gibi yerlerde bulunan merdiven, korkuluk ve asansör temizliğini titiz şekilde sağlamaktayız..."
            divert="/merdiven-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p8}
            title="Yurt Temizliği"
            text="Öğrencilerimizin kaldığı yurt, pansiyon, okul gibi alanlarda en iyi şekilde hijyen koşullarını yerine getirip güzel hizmet sağlamaktayız..."
            divert="/yurt-cami-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            photo={p9}
            title="İnşaat Sonrası Temizlik"
            text="İnşaat ya da tadilat sonrası oluşabilecek kaba ya da ince her türlü temizlik ekiplerimiz tarafından ayrıntılı bir şekilde sağlanmaktadır..."
            divert="/insaat-sonrasi-temizlik"
          />
        </div>
      </div>

      <div className="col-12 harita" style={{}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95924.8028124052!2d36.24634229383076!3d41.29471932411066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088772262f7e4a3%3A0xd09e9ce83154453d!2sSamsun%20Temizlik%20%C5%9Eirketleri%20-%20Samsun%20Profesyonel%20Temizlik!5e0!3m2!1str!2str!4v1610804726575!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px darkblue solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
            </div> 



    </div>
  );
}

export default Home;
