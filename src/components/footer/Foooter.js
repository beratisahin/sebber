import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import logo from "./saglamlogo.jpg";
import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class Foooter extends Component {
  render() {
    return (
      <div>
        <div class="row p-4" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <a href="/" title="Samsun Profesyonel Sağlam Temizlik">
              <img
                src={logo}
                alt="logo"
                style={{ width: "90%", height: "150px" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "13px",
                color: "black",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri
              ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan
              1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
              alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden
              üretilmiştir.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "black", fontSize: "18px" }}>Hizmetlerimiz</b>
            <ul className="bottomlist">
              <li onClick="{window.scrollTop(0)}">
                <Link to="/ev-temizligi">Ev Temizliği</Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/insaat-sonrasi-temizlik">
                  İnşaat Sonrası Temizlik
                </Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/ofis-temizligi">Ofis Temizliği</Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/yerinde-koltuk-yikama">Yerinde Koltuk Yıkama</Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/dezenfektan-ile-ilaclama">
                  Dezenfektan ile İlaçlama
                </Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/hali-yikama">Halı Yıkama</Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/merdiven-temizligi">Merdiven Temizliği</Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/yurt-cami-temizligi">Yurt-Cami-Okul Temizliği</Link>
              </li>
              <li onClick="{window.scrollTop(0)}">
                <Link to="/hamaliye-temini">Hamaliye Temini</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <b style={{ color: "black", fontSize: "18px" }}>Kurumsal</b>
            <ul className="bottomlist">
              <li onClick="{window.scrollTop(0)}" style={{ color: "black" }}>
                <Link to="/hakkimizda">Hakkımızda</Link>
              </li>
              <li onClick="{window.scrollTop(0)}" style={{ color: "black" }}>
                <Link to="/belgelerimiz">Belgelerimiz</Link>
              </li>
              <li onClick="{window.scrollTop(0)}" style={{ color: "black" }}>
                <Link to="/referanslarimiz">Referanslarımız</Link>
              </li>
              <li onClick="{window.scrollTop(0)}" style={{ color: "black" }}>
                <Link to="/ekibimiz">Ekibimiz</Link>
              </li>
              <li onClick="{window.scrollTop(0)}" style={{ color: "black" }}>
                <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            style={{ fontSize: "15px" }}
          >
            <p style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>
              Sosyal Medya
            </p>
            <a
              href="https://www.facebook.com/114979717021494?referrer=whatsapp"
              style={{ float: "left" }}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com/samsun_profesyonel_temizlik?igshid=17n1ktbi5mrbk"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/+905446674526"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon />
            </a>
            <a
              href="tel: +905446674526"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon />
            </a>

            <br />
            <p style={{ color: "blue", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <EmailIcon />
              </a>
              saglamprofesyoneltemizlik@gmail.com
            </p>
            <p style={{ color: "blue", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <SettingsPhoneIcon />
              </a>{" "}
              0543 228 63 96
            </p>
            <p style={{ color: "blue", fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a>
                <HomeIcon />
              </a>
              Yenidoğan Mahallesi Akagündüz Caddesi İlkadım/Samsun{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
