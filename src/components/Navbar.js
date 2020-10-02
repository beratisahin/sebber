import './Navbar.css';
import logo from './saglamlogo.jpg';
import mainlogo from './mainlogo.ico';
import CallIcon from "@material-ui/icons/Call";
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            
            //<a href="Saglam" title="Sağlam Temizlik"><img src={logo} alt="logo" style={{width:"75px",height:"50px"}}></img></a>
            // <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div>
                
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                
                
                <a class="navbar-brand" style={{color:"blue",fontSize:"12px"}} href="#">
                <a href="Saglam" title="Samsun Sağlam Profesyonel Temizlik"><img src={logo} alt="logo" style={{width:"80px",height:"60px"}}></img></a>
                
                </a>

                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown" >
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kurumsal 
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Hakkımızda</a>
                                    <a class="dropdown-item" href="#">Belgelerimiz</a>
                                    <a class="dropdown-item" href="#">Referanslarımız</a>
                                    <a class="dropdown-item" href="#">Ekibimiz</a>
                                    <a class="dropdown-item" href="#">İş Başvurusu</a>
                                    <a class="dropdown-item" href="#">S.S.S</a>
                                    <a class="dropdown-item" href="#">Müşteri Görüşleri</a>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Hizmetlerimiz 
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Ev Temizliği</a>
                                    <a class="dropdown-item" href="#">İnşaat Sonrası Temizlik</a>
                                    <a class="dropdown-item" href="#">Ofis Temizliği</a>
                                    <a class="dropdown-item" href="#">Yerinde Koltuk Yıkama</a>
                                    <a class="dropdown-item" href="#">Dezenfektan İle İlaçlama</a>
                                    <a class="dropdown-item" href="#">Halı Yıkama</a>
                                    <a class="dropdown-item" href="#">Merdiven Temizliği</a>
                                    <a class="dropdown-item" href="#">Yurt - Cami - Okul Temizliği</a>
                                    <a class="dropdown-item" href="#">Dış Cephe Çevre Temizliği</a>
                                    <a class="dropdown-item" href="#">Hamaliye Temini</a>


                                </div>
                            
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" href="#">Çalışma Prensibimiz </a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" href="#">Galeri</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">İletişim</a>
                            </li>

                            

                        </ul>
                     
                       
            </div>
        </nav>
                    
            </div>
                
                 
              
                
           
        )
    }
}
