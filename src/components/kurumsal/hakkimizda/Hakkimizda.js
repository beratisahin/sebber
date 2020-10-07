
import './hakkımızda.css';
import React from 'react'

function Hakkimizda() {
    return (
        
        <div class="row" style={{border:"2px dotted white",justify: "center",margin:"20px"}}>
            
           
            
            <div className="hakkımızda">
                <h3 style={{textAlign:"center",color:"orange"}}>Hakkımızda</h3>
                <p className="hak" >Temizliğe dair herhangi bir iş tamamlandıktan sonra siz değerli müşterilerimize yaptığımız işten memnun kalıp kalmadığnızı sormak çalışma prensiplerimizden ilkidir. 
                    Olumlu dönüşler bizi motive eder, olumsuz dönüşler işimiz daha iyi yapmak için bizi hırslandırır ve müşterimizi memnun edene kadar desteğimiz sürer.
                </p>
                <p className="hak">
                    Yaptığımız bütün işlemlerde siz değerli müşterilerimizin herhangi bir zarara uğraması adına anlaşmalı sigorta şirketlerimizden garantörlük sağlanmaktadır.
                </p>
                <p className="hak">
                    Çalışma arkadaşlarımızın tamamı sigortalı olarak çalışmaktadır. Onların ve ailelerinin can güvenliği bizler için önemlidir.
                </p>
                <p className="hak">
                    Firmamız yeni kurulmuş olmasına rağmen aldığı talep ve olumlu geri dönüşler sayesinde piyasadaki söz sahipliğini her geçen gün daha da arttırmaktadır
                </p>
                <p className="hak">
                    Firmamızda çalışmakta olan ekip arkadaşlarımız belirli alanlarda tecrübeli ve sertifikalı olup, yetkinliklerine yönelik iş aktarımı yapılmaktadır.
                </p>
            </div>
            
          
        </div>
    )
}

export default Hakkimizda
