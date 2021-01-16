import Merdiven from './merdiven.jpg';
import React from 'react'

function MerdivenTemizligi() {
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Merdiven} class="hizmet-photo" title="Merdiven temizliği" alt="Merdiven Temizliği" ></img>
                <div className="card-body col-12">
                    <br/>
                    <p class="hizmet-title" >Merdiven Temizliği</p>
                    <p class="hizmet-text" >Toplu olarak yaşanılan apartmanlarınızda, sitelerinizde merdiven ve korkuluk temizliği uzman ekiplerimiz tarafından sağlanmaktadır. Apartmanlarınızda düzenli olarak temizlik işlerinizi alıp sizi memnun etmek için elimizden geleni yapıyrouz. 
                    Siz değerli müşterilerimizin temiz ve hijyenik bir ortamda yaşaması bizim önceliğimizdir.</p>    
                </div>
            </div>
        </div>
    )
}

export default MerdivenTemizligi
