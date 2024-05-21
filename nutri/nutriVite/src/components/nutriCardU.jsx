import { useNavigate } from 'react-router-dom';

export function NutriCard({ nutri }) {
    const navigate = useNavigate();

    return (
        <div style={{ background: "black" }} onClick={() => navigate(`/nutritec/${nutri.id}`)}>
            <h1>{nutri.nombre}</h1>
            <h1>{nutri.apellido}</h1>
            <h3>{nutri.correo}</h3>
            <h3>{nutri.altura}</h3>
            <h3>{nutri.peso}</h3>
            <h3>{nutri.rol}</h3>
            <h3>{nutri.fecha_nacimiento}</h3>
            <h3>{nutri.genero}</h3>
            <hr />
        </div>
    );
}
