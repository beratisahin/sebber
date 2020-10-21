import "./Navbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#28304d",
        }}
      >

        <div
          className="mt-3"
          style={{ position: "absolute", left: "0", zIndex:'55555', color: "white",}}
        >
          <Link className="nav-link" to="/" style={{ color: "red", fontSize:"17px"}}>
            <b>SAĞLAM PROFESYONEL TEMİZLİK</b>
          </Link>
        </div>
        
        
       
        <nav
          class="navbar navbar-expand-lg navbar-dark p-0 m-0"
          style={{ backgroundColor: "#28304d", borderRadius: "0px !important"}}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" style={{float:"right"}}>
              <li class="nav-item dropdown">
                <a
                  style={{ color: "#fff", fontSize: "20px" }}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"

                >
                  KURUMSAL
                </a>
                &nbsp;
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/hakkimizda">
                    Hakkımızda
                  </Link>

                  <Link className="dropdown-item menu-item-link" to="/belgelerimiz">
                    Belgelerimiz
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/referanslarimiz">
                    Referanslarımız
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/ekibimiz">
                    Ekibimiz
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/is-basvurusu">
                    İş Başvurusu
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/sss">
                    S.S.S
                  </Link>
                 
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  style={{ color: "#fff", fontSize: "20px" }}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  HİZMETLERİMİZ
                </a>
                &nbsp;
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/ev-temizligi">
                    Ev Temizliği
                  </Link>
                  <Link
                    className="dropdown-item menu-item-link"
                    to="/insaat-sonrasi-temizlik"
                  >
                    İnşaat Sonrası Temizlik
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/ofis-temizligi">
                    Ofis Temizliği
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/yerinde-koltuk-yikama">
                    Yerinde Koltuk Yıkama
                  </Link>
                  <Link
                    className="dropdown-item menu-item-link"
                    to="/dezenfektan-ile-ilaclama"
                  >
                    Dezenfektan İle İlaçlama
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/hali-yikama">
                    Halı Yıkama
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/merdiven-temizligi">
                    Merdiven Temizliği
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/yurt-cami-temizligi">
                    Yurt - Cami - Okul Temizliği
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/hamaliye-temini">
                    Hamaliye Temini
                  </Link>
                </div>
              </li>
              
              <li class="nav-item">
                <Link className="nav-link menu-item-link" to="/calisma-prensibimiz" style={{ color: "#fff", fontSize: "20px" }}>
                  ÇALIŞMA PRENSİBİMİZ
                </Link>
              </li>
              &nbsp;
              
              <li class="nav-item">
                <Link className="nav-link menu-item-link" to="/galeri" style={{ color: "#fff", fontSize: "20px" }}>
                  GALERİ
                </Link>
              </li>
              &nbsp;
              
              <li class="nav-item">
                <Link className="nav-link menu-item-link" to="/iletisim" style={{ color: "#fff", fontSize: "20px" }}>
                  İLETİŞİM
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
