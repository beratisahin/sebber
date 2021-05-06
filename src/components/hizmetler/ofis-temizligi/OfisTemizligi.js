import Ofis from './ofis.jpg';
import "./Ofis.css";
import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle';

function OfisTemizligi() {
    useDocumentTitle('Ofis Temizliği - Samsun Profesyonel Temizlik');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
                <img src={Ofis} class="hizmet-photo" title="ofis temizliği" alt="Ofis Temizliği" ></img>
                <div className="card-body col-12">
                    <br/>
                    <p class="hizmet-title" >Ofis Temizliği</p>
                    <p class="hizmet-text" >Ofis ortamı gibi toplu çalışma alanlarında hijyenin ne kadar önemli olduğunun farkındayız ve en iyi hizmeti veriyoruz. 
                    Çalışma arkadaşlarınız ile gönül rahatlığıyla etkileşimde bulunabilir, profesyonel işinize odaklanabilirsiniz. 
                    Her türlü ofis temizliğini sağlayıp sizlere güzel nezih bir ortamda çalışma imkanı sunmak bizim görevimizdir.</p>    
                </div>
            </div>
            
        </div>
    )
}


export default OfisTemizligi
