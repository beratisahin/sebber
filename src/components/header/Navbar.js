import "./Navbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import BusinessIcon from '@material-ui/icons/Business';
import HouseIcon from '@material-ui/icons/House';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';

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
            style={{marginRight:"1rem"}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{marginRight:"2rem"}}>
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
                 <BusinessIcon style={{fontSize:"large"}}/>&nbsp; KURUMSAL
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
                  <HouseIcon style={{fontSize:"large"}}/>&nbsp;  HİZMETLERİMİZ
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
                <Link className="nav-link menu-item-link2" to="/calisma-prensibimiz" style={{ color: "#fff", fontSize: "20px" }}>
                  <PlaylistAddCheckIcon style={{fontSize:"large"}}/>&nbsp;  ÇALIŞMA PRENSİBİMİZ
                </Link>
              </li>
              &nbsp;
              
              <li class="nav-item">
                <Link className="nav-link menu-item-link2" to="/galeri" style={{ color: "#fff", fontSize: "20px" }}>
                  <CameraAltIcon style={{fontSize:"large"}}/>&nbsp; GALERİ
                </Link>
              </li>
              &nbsp;
              
              <li class="nav-item">
                <Link className="nav-link menu-item-link2" to="/iletisim" style={{ color: "#fff", fontSize: "20px" }}>
                 <ContactMailIcon style={{fontSize:"large"}}/>&nbsp; İLETİŞİM
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
