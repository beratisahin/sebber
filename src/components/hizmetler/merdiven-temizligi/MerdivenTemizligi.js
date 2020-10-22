import Merdiven from './merdiven.jpg';
import React from 'react'

function MerdivenTemizligi() {
    return (
        <div className="col-12">
             <div className="card mt-4" style={{align:"center",backgroundColor:"lightgray"}}>
                <img src={Merdiven} class="card-img-top" title="merdiven temizliği" alt="Merdiven Temizliği" style={{width:"80%",height:"30%",margin:"auto"}}></img>
                <div class="card-body col-12">
                    <br/>
                    <h5 class="card-title" style={{textAlign:"center",fontSize:"30px",color:"Red"}}>Merdiven Temizliği</h5>
                    <p class="card-text" style={{textAlign:"center",fontSize:"20px"}}>Toplu olarak yaşanılan apartmanlarınızda, sitelerinizde merdiven ve korkuluk temizliği uzman ekiplerimiz tarafından sağlanmaktadır. Apartmanlarınızda düzenli olarak temizlik işlerinizi alıp sizi memnun etmek için elimizden geleni yapıyrouz. Siz değerli müşterilerimizin temiz ve hijyenik bir ortamda yaşaması bizim önceliğimizdir.</p>
                   
                    
                    <br/>
                </div>
            </div>

        </div>
    )
}

export default MerdivenTemizligi
