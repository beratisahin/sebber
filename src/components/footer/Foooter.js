import './Foooter.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import logo from './saglamlogo.jpg';

import React, { Component } from 'react'

export default class Foooter extends Component {
    render() {
        return (
            
            <div>
                    <div class="row p-4">

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                           <a href="Saglam" title="Sağlam Temizlik"><img src={logo} alt="logo" style={{width:"90%",height:"150px"}}></img></a> 
                            <p className="mt-4" style={{fontSize:"13px",color:"black",textAlign:"justify",textIndent:"1px"}}> 1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler için yeniden üretilmiştir. 
                                Çiçero tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden üretilmiştir.
                           </p>
                         </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <b style={{color:"black"}}>Hizmetlerimiz</b>
                            <ul className="bottomlist">
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Ev Temizliği</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Ofis Temizliği</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Koltuk Yıkama</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Araç Koltuk Yıkama</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Halı Yıkama</a></li>   
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <b style={{color:"black"}}>Kurumsal</b>
                            <ul className="bottomlist">
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Hakkımızda</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Belgelerimiz</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Referanslarımız</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> Ekibimiz</a></li>   
                                 <li style={{color:"black"}}><a class="dropdown-item" href="#"> İletişim </a></li>   
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <p style={{color:"black", fontWeight:"bold"}}>Sosyal Medya</p>
                                <a href="https://www.facebook.com/114979717021494?referrer=whatsapp" style={{float:"left"}}><FacebookIcon/></a>
                                <a href="https://instagram.com/samsun_profesyonel_temizlik?igshid=17n1ktbi5mrbk" style={{float:"left",textIndent:"10px"}} ><  InstagramIcon/></a>
                                <a href="https://wa.me/+905446674526" style={{float:"left",textIndent:"10px"}} ><  WhatsAppIcon/></a>
                                <a href="tel: +905446674526" style={{float:"left",textIndent:"10px"}} ><  SettingsPhoneIcon/></a>
                                
                                <br/>
                                <p style={{color:"blue",fontSize:"14px",textAlign:"left"}}> <a><EmailIcon/></a>saglamprofesyoneltemizlik@gmail.com</p>
                                <p style={{color:"blue",fontSize:"14px",textAlign:"left"}}> <a><SettingsPhoneIcon/></a> 0543 228 63 96</p> 
                                <p style={{color:"blue",fontSize:"14px",textAlign:"left"}}> <a><HomeIcon/></a> Atatürk Mahallesi No:19/19 Atakum/Samsun</p>
                                
                        </div>

                        
                    </div>
                
            </div>
            
        )
    }
}
