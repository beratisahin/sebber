import './sss.css';
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function Sss() {
    useDocumentTitle('Sıkça Sorulan Sorular - Samsun Profesyonel Temizlik');
    return (
        
        <div class="row" style={{border:"2px dotted white",justify: "center",margin:"20px",minHeight:"30rem"}}>
            
           
            
        <div className="hakkımızda" style={{minHeight:"40rem"}}>
            <h3 style={{textAlign:"center",color:"orange"}}><b>Sıkça Sorulan Sorular</b></h3>
            <h4 className="hed">1- Hangi günler hizmet alabilirim?</h4>
            <p className="kurumsal_text" >Talebinize göre haftanın her günü ve saati hizmet alabilirsiniz.
            </p>
            <br/>
            <h4 className="hed">2- Düzenli olarak hizmet almak istersem, hep aynı kişiyi yönlendirebilecek misiniz?</h4>
            <p className="kurumsal_text">
            Yönlendirdiğimiz temizlik personelimizden memnun kalmanız halinde aynı personeli düzenli olarak size yönlendirebiliyoruz.
            </p>
            <br/>
            <h4 className="hed">3- Evim yüksek katta, camlar iç-dış detaylı temizlenebilecek mi?</h4>
            <p className="kurumsal_text">
            Temizlik personellerimizin can sağlığı bizim birincil önceliğimiz. Camları dışarıdan temizlemenin çok farklı bir hizmet olduğunu hatırlatmak isteriz. Camları dıştan özel ekipmanlarımız ile temizliyoruz ancak ekipmanlarımızın yetersiz kalması durumunda temizlik personelimizin elinin ulaşabileceği yere kadar temizliyoruz.
            </p>
           
        </div>
        
      
    </div>
            


    )
}

export default Sss
