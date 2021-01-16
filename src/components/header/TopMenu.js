import React, { Component } from "react";
import { Link } from "react-router-dom";
import SPT from "./SPT.png";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import "./TopMenu.css"

export default class TopMenu extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{ width: "100%",backgroundColor:"#f8f9fa" }}
      >
        <div className="col-12" style={{display:"inline"}}>

            <div className="col-2" style={{float:"left"}}>
              <a href="/" title="Samsun Sağlam Profesyonel Temizlik">
              <img
                className="top_image"
                style={{ height: "auto", width: "100px",padding:"1rem" }}
                src={SPT}
                alt="logo"
                
              ></img>
              </a>
              
            </div>

            <div
              className="col-8 firma_div"
              style={{ color: "white",float:"left",marginTop:"3rem"}}
              >
              <Link className="firma_ismi" to="/" style={{ color: "darkblue", fontSize:"xx-large",textAlign:"center",align:"center",margin:"auto",display:"block"}}>
                <b>SAMSUN SAĞLAM PROFESYONEL TEMİZLİK</b>
              </Link>
            </div>


          
            <div className="col-2 medya-div" style={{display:'flex', justifyContent:'flex-end',float:"right",marginTop:"3rem"}}>
                 &nbsp;
                  <a
                    href="https://wa.me/+905432286396"
                    style={{ float: "left",fontSize:"16px" }}
                  >
                    <WhatsAppIcon className="icon_top"/>
                  </a>
                  <a
                    href="tel: +905432286396"
                    style={{ float: "left", fontSize:"16px" }}
                  >
                    <SettingsPhoneIcon className="icon_top" />
                  </a>
            </div>

        </div>
      </div>
    );
  }
}
