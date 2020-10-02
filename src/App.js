import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Services from "./components/Services";
import Foooter from './components/Foooter';
import TopMenu from './components/TopMenu';
import BottomMenu from './components/BottomMenu';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopMenu/>
       <Navbar/>
        <br/>
        <br/>
        
        <Slider/>
        
        <br/>
        <div className="cards_body">
         
          <Services 
            title="Dezenfekte Hijyen"
            text="Çalışma Alanlarınızda Temizliğinizi Önemsiyor Siz Değerli Müşterilerimizin Çalışma Alanlarında Kaparak Evlerinizde .."
            divert="#dezenfekte-hijyen"
          />
           <Services 
            title="Ofis Temizliği"
            text="Çalışma Alanlarınızda Temizliğinizi Önemsiyor Siz Değerli Müşterilerimizin Çalışma Alanlarında Kaparak Evlerinizde .."
            divert="#ofis-temizligi"
          />
          <Services 
            title="Ev Temizliği"
            text="Daire, Rezidans, Villa larınızın Profesyonel ekibimiz ile Detaylı Temizlik ve dezenfektan İşlemleri Uzman Personellerimizce ..."
            divert="#ev-temizligi"
          />
          <Services 
            title="Hamaliye Temini"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="#hamaliye-temini"
          />
          <br/>
          <br/>
          <Services 
            title="Koltuk Yıkama"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="#koltuk-yikama"
          />
          <Services 
            title="Halı Yıkama"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="#hali-yikama"
          />
          <Services 
            title="Merdiven Temizliği"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="#merdiven-temizligi"
          />
          <Services 
            title="Yurt Temizliği"
            text="Yuvanızda Gözle Görülmeyen ve Ençokta Koltuk vb. Yerlerde Bulunan Mikroorganizmalar ve Bakterileri Çalışmı ..."
            divert="#yurt-temizligi"
          />
          
        </div>
        <br/>
        
        <Foooter/>
       
        <BottomMenu/>
       
        
      </header>
    </div>
  );
}

export default App;
