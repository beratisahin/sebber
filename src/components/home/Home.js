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
            text="Kaliteli dezenfektan ürünlerimiz ile bulunduğunuz ortamları en ince ayrıntısına kadar temizleyip Covid-19 virüsünden sizi uzak tutuyoruz..."
            divert="/dezenfektan-ile-ilaclama"


          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Ofis Temizliği"
            text="Ofis ortamı gibi toplu çalışma alanlarında hijyenin ne kadar önemli olduğunun farkındayız ve en iyi hizmeti veriyoruz..."
            divert="/ofis-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Ev Temizliği"
            text="Evde temizlik yapmak için zaman ve imkan bulamayan müşterilerimiz için düzenli olarak ev temizliği hizmetimiz bulunmaktadır..."
            divert="/ev-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Hamaliye Temini"
            text="Evden eve nakliyat ve küçük çaplı eşya taşıma işlemleriniz için personel talebinde bulunup işlerinizi çözüme kavuştururuz..."
            divert="/hamaliye-temini"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Koltuk Yıkama"
            text="Evinizde bulunan ya da araç koltuklarınızı yerinde detaylı bir şekilde temizleyip ilk günki kondisyonuna dönüştürüyoruz..."
            divert="/yerinde-koltuk-yikama"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Halı Yıkama"
            text="Çocularınızın üzerinde emeklediği ve en çok bakteri barındıran alanların başında olan halılarınızın hijyeni sağlamaktayız..."
            divert="/hali-yikama"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Merdiven Temizliği"
            text="Toplu olarak yaşanılan apartmanlarınızda, sitelerinizde merdiven ve korkuluk temizliği uzman ekiplerimiz tarafından sağlanmaktadır..."
            divert="/merdiven-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="Yurt Temizliği"
            text="Öğrencilerimizin kaldığı yurt pansiyon okul gibi alanlarda en iyi şekilde hijyen koşullarını yerine getirip hizmet sağlamaktayız..."
            divert="/yurt-cami-temizligi"
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Services
            title="İnşaat Sonrası Temizlik"
            text="İnşaat ya da tadilat sonrası oluşabilecek kaba ya da ince her türlü temizlği ekiplerimiz tarafından itina ile gerçekleştiriyoruz..."
            divert="/insaat-sonrasi-temizlik"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
