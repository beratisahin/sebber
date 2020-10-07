import Insaat from './insaat.jpg';
import React from 'react'

function InsaatSonrasiTemizlik() {
    return (
        <div className="col-12">
            
            <div className="card mt-4" style={{align:"center",backgroundColor:"lightgray"}}>
                <img src={Insaat} class="card-img-top" alt="İnşaat Sonrası Temizlik" style={{width:"80%",height:"30%",margin:"auto"}}></img>
                <div class="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>İnşaat Sonrası Temizlik</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>İnşaat yapımının tamamlanmasının ardından ortaya çıkan her türlü pislik, artık yapı malzemesinin temizliği uzman ekiplerimiz tarafından titizlikle yürütülmektedir. </p>
                   
                    
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default InsaatSonrasiTemizlik
