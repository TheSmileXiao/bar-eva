import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { entradas, ArrozYTallarines, ternera, pollo, cerdo, gambas, pato, platoEspecial, menusEspeciales } from '../data/dataEs'

export default function EsCarta(){
    return(
        <div>
            <Hero/>
            <Products heading={'Entradas'} data={entradas}/>
            <Products heading={'Arroz y tallarines'} data={ArrozYTallarines}/>
            <Products heading={'Ternera'} data={ternera}/>
            <Products heading={'Pollo'} data={pollo}/>
            <Products heading={'Cerdo'} data={cerdo}/>
            <Products heading={'Gambas'} data={gambas}/>
            <Products heading={'Pato'} data={pato}/>
            <Products heading={'Plato especial'} data={platoEspecial}/>
            <Products heading={'Menus especiales'} data={menusEspeciales}/>
            <Footer/>
        </div>
    )
};