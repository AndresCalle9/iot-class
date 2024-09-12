import PropTypes from 'prop-types';

// export const Component = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.subTitle}</p>
//         </div>
//     );
// }

export const Component = ({title, subTitle, test, flag}) => {
    //ejemplificar throw antes del proptype
    // if (!title) throw new Error('Title is required');
    // Ejemplificar cambio de tipo y hablar de TS en este punto
    // subTitle = 5;
    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{test}</p>
            {flag ? <p>Flag es verdadero</p> : <p>Flag es falso</p>}
        </div>
    );
}

Component.propTypes = {
    //mostrar primero solo la propiedad de tipo string y luego el isRequired
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

// Ahora hablar de los defaultProps
Component.defaultProps = {
    title: 'No hay título',
    subTitle: ':(',
    test: 1
}