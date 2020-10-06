import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./saglamlogo.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import "./TopMenu.css"

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="p-0 m-0"
        style={{ width: "100%",backgroundColor:"#f8f9fa" }}
      >
        <div className="row p-0 m-0 pl-5">

          <div className="col-4">
            <a href="/" title="Samsun Sağlam Profesyonel Temizlik">
            <img
              
              style={{ height: "auto", width: "100px" }}
              src={logo}
              alt="logo"
              
            ></img>
            </a>
            
          </div>


          
          <div className="col-8 mt-5" style={{display:'flex', justifyContent:'flex-end',float:"right"}}>
            <a
              href="https://www.facebook.com/114979717021494?referrer=whatsapp"
              style={{ float: "left"}}
            >
              <FacebookIcon className="icon" style={{ fontSize: 30,color:"darkblue" }} />
            </a>
            <a
              href="https://instagram.com/samsun_profesyonel_temizlik?igshid=17n1ktbi5mrbk"
              style={{ float: "left", textIndent: "10px",fontSize:"16px" }}
            >
              <InstagramIcon className="icon" style={{ fontSize: 30,color:"darkblue" }} />
            </a>
            <a
              href="https://wa.me/+905432286396"
              style={{ float: "left", textIndent: "10px",fontSize:"16px" }}
            >
              <WhatsAppIcon className="icon" style={{ fontSize: 30,color:"darkblue" }}/>
            </a>
            <a
              href="tel: +905432286396"
              style={{ float: "left", textIndent: "10px",fontSize:"16px" }}
            >
              <SettingsPhoneIcon className="icon" style={{ fontSize: 30,color:"darkblue" }}/>
            </a>
          </div>

        </div>
      </div>
    );
  }
}
