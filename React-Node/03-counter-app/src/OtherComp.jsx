// import {Fragment} from 'react'

//Imprimir funciones

const getResult = (a,b) => {
    return a+b;
}

//explicar el div en el return y sus desventajas
//pasar por fragment
// y finalizar con <>
export function NewOne() {
    console.log('newone')
    const nombre = 'Andrés'
    // con objetos
    const newMessage = {
        name: 'Andrés',
        age: 32,
        text: "Hola, cómo están?",
        list: [1,2,3,4,5,6,7,8,9],
        bool: true
    }
    return (
        // <div>
        // <Fragment>
        <>
        <h1>{nombre}</h1>
        <h1>{newMessage.age}</h1>
        <h2>Soy un subtitulo</h2>
        {/* imprimir funciones  */}
        <h3>{getResult(1,20)}</h3>
        <ul>
            <li>{nombre}</li>
            <li>Hola</li>
            <li>{newMessage.list}</li>
            <li>{newMessage.text}</li>
        </ul>
        </>
        // </Fragment>
        // </div>
    );
}