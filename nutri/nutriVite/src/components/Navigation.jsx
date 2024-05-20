 import { Link } from "react-router-dom"
 export function Navigations() {
    return (
        <div>
            <Link to="/nutritec">
                <h1>Usuarios</h1>
            </Link>
            <Link to="/nutritec-create"> Crear nuevo usuario</Link>
        </div>
    )
 }

