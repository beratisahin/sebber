import './BottomMenu.css';
import React, { Component } from 'react'

export default class BottomMenu extends Component {
    render() {
        return (
            
                <div class="container p-0 m-0" style={{backgroundColor:"#f8f9fa"}}>
                    <div className="patent">
                        <hr/>    
                            <p style={{fontSize:"12px",color:"black",paddingLeft:"15px",float:"left"}}> ©2020 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <p style={{fontSize:"12px",color:"black",paddingRight:"15px",float:"right",textAlign:"right"}}> ®Se<b>B</b>er Tech</p>
                    </div>
                </div>
                        
            
        )
    }
}
