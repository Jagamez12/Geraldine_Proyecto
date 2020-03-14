import React from 'react';
import imagen from './img.jpeg'
import './Badge.css';

class Badge extends React.Component{
    render(){
        return <div className = "contenedor">

            <div>
                <h1>DESCUENTOS EN TODA LA TIENDA</h1>
                
                <h2>Aqui encuentras las mejores ofertas</h2>
                <img src = {imagen} className = "fondo" alt = "fond"/>
            </div>
        </div>
    }
}

export default Badge;