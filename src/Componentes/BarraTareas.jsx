import './styles.css'

export function Barra(){
    return <div className="BarraInicio">
        <ElementoBarra></ElementoBarra>
    </div>
}

export function ElementoBarra(){
    const elementos = [
        {
            nombre: 'Privacidad',
            link: 'https://www.google.com'
        },
        {
            nombre: 'Mis vuelos',
            link: 'https://www.google.com'
        },
        {
            nombre: 'Inicio',
            link: 'https://www.google.com'
        }
    ]
    const mostrar = elementos.map((i)=>
        <a href={i.link} className="ElementosBarra">{i.nombre}</a>
    );
    return mostrar
}