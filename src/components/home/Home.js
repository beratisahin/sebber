import React from "react";
import Services from "../services/Services";
import Slider from "../slider/Slider";

function Home() {
  return (
    <div>
      <div className="col-12 mt-4 p-0" style={{ borderRadius: "50px" }}>
        <Slider />
      </div>

      <div className="row mr-4">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Dezenfekte Hijyen"
            text="Çalışma Alanlarınızda Temizliğinizi Önemsiyor Siz Değerli Müşterilerimizin Çalışma Alanlarında Kaparak Evlerinizde .."
            divert="/dezenfektan-ile-ilaclama"


          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Ofis Temizliği"
            text="Çalışma Alanlarınızda Temizliğinizi Önemsiyor Siz Değerli Müşterilerimizin Çalışma Alanlarında Kaparak Evlerinizde .."
            divert="/ofis-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Ev Temizliği"
            text="Daire, Rezidans, Villa larınızın Profesyonel ekibimiz ile Detaylı Temizlik ve dezenfektan İşlemleri Uzman Personellerimizce ..."
            divert="/ev-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Hamaliye Temini"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="/hamaliye-temini"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Koltuk Yıkama"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="/yerinde-koltuk-yikama"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Halı Yıkama"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="/hali-yikama"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Merdiven Temizliği"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="/merdiven-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Yurt Temizliği"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="/yurt-cami-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="İnşaat Sonrası Temizlik"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="/insaat-sonrasi-temizlik"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
