import Merdiven from './merdiven.jpg';
import React from 'react'

function MerdivenTemizligi() {
    return (
        <div className="col-12">
             <div className="card mt-4" style={{align:"center",backgroundColor:"lightgray"}}>
                <img src={Merdiven} class="card-img-top" alt="Merdiven Temizliği" style={{width:"80%",height:"30%",margin:"auto"}}></img>
                <div class="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Merdiven Temizliği</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>En çok da dikkat etmemiz gereken alanların başında toplu yaşanılan yerler gelmektedir. Aprtman içindeki başta merdiven ve korkuluk temizliği olmak üzere aklınıza gelebilecek her alanda profesyonel ekip arkadaşlarımız ile temizlik yapmaktayız. </p>
                   
                    
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default MerdivenTemizligi
