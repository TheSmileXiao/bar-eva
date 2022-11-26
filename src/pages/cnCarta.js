import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Products from '../components/Products';
import {entradasC, sopasC, tallarinesFideosC, platosPrincipales} from '../data/dataCn.js'



export default function CnCarta(){
    return(
    <div>
        <Hero/>
        <Products heading={'冷菜'} data={entradasC}/>
        <Products heading={'汤'} data={sopasC}/>
        <Products heading={'面食'} data={tallarinesFideosC}/>
        <Products heading={'热菜'} data={platosPrincipales}/>
        <Footer/>
    </div>
    )
};