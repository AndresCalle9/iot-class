import './cardStyles.css';

export const Card = ({title, completed, userId}) => {
    return (
        <div className="card">
            <h2>{title} - {userId}</h2>
            <p>{completed ? '✅' : '❌'}</p>
        </div>
    )
}