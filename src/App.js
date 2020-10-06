import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import TopMenu from "./components/header/TopMenu";
import BottomMenu from "./components/footer/BottomMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";
import Hakkimizda from "./components/kurumsal/hakkimizda/Hakkimizda";
import Belgerimiz from "./components/kurumsal/belgelerimiz/Belgelerimiz";
import Referanslarimiz from "./components/kurumsal/referanslarimiz/Referanslarimiz";
import Ekibimiz from "./components/kurumsal/ekibimiz/Ekibimiz";
import IsBasvurusu from "./components/kurumsal/is-basvurusu/IsBasvurusu";
import MusteriGorusleri from "./components/kurumsal/musteri-gorusleri/MusteriGorusleri";
import SSS from "./components/kurumsal/s.s.s/Sss";
import EvTemizligi from "./components/hizmetler/ev-temizligi/EvTemizligi";
import InsaatSonrasiTemizlik from "./components/hizmetler/insaat-sonrasi-temizlik/InsaatSonrasiTemizlik";
import OfisTemizligi from "./components/hizmetler/ofis-temizligi/OfisTemizligi";
import KoltukYikama from "./components/hizmetler/koltuk-yikama/KoltukYikama";
import Dezenfektan from "./components/hizmetler/dezenfektan/Dezenfektan";
import HaliYikama from "./components/hizmetler/hali-yikama/HaliYikama";
import MerdivenTemizligi from "./components/hizmetler/merdiven-temizligi/MerdivenTemizligi";
import YurtCamiTemizligi from "./components/hizmetler/yurt-cami-temizligi/YurtCamiTemizligi";
import HamaliyeTemini from "./components/hizmetler/hamaliye-temini/HamaliyeTemini";
import CalismaPrensibimiz from "./components/calisma-prensibimiz/CalismaPrensibimiz";
import Galeri from "./components/galeri/Galeri";
import Iletisim from "./components/iletisim/ContactForm";




function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-12 m-0 p-0">
          <div className="col-12 m-0 p-0">
            <TopMenu />
          </div>
          <div className="col-12 m-0 p-0">
            <Navbar />
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hakkimizda" component={Hakkimizda} />
            <Route path="/belgelerimiz" component={Belgerimiz} />
            <Route path="/referanslarimiz" component={Referanslarimiz} />
            <Route path="/ekibimiz" component={Ekibimiz} />
            <Route path="/is-basvurusu" component={IsBasvurusu} />
            <Route path="/sss" component={SSS} />
            <Route path="/musteri-gorusleri" component={MusteriGorusleri} />
            <Route path="/ev-temizligi" component={EvTemizligi} />
            <Route path="/insaat-sonrasi-temizlik" component={InsaatSonrasiTemizlik} />
            <Route path="/ofis-temizligi" component={OfisTemizligi} />
            <Route path="/yerinde-koltuk-yikama" component={KoltukYikama} />
            <Route path="/dezenfektan-ile-ilaclama" component={Dezenfektan} />
            <Route path="/hali-yikama" component={HaliYikama} />
            <Route path="/merdiven-temizligi" component={MerdivenTemizligi} />
            <Route path="/yurt-cami-temizligi" component={YurtCamiTemizligi} />
            <Route path="/hamaliye-temini" component={HamaliyeTemini} />
            <Route path="/calisma-prensibimiz" component={CalismaPrensibimiz} />
            <Route path="/galeri" component={Galeri} />
            <Route path="/iletisim" component={Iletisim} />
          </Switch>

          <div className="col-12">
            <Foooter />
          </div>
          
          <div className="col-12">
            <BottomMenu />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
