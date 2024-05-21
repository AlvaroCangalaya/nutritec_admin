import React, { useState, useEffect } from "react";
import { getAllNutri } from "../api/nutri.app";
import { NutriCard } from "./nutriCardU";
export function NutriList() {
    const [nutri, setNutri] = useState([]);

    useEffect(() => {
        async function loadNutri() {
            const res = await getAllNutri();
            setNutri(res.data);
        }
        loadNutri();
    }, []);

    return (
        <div>
            {nutri.map(nutri => (
                <NutriCard key={nutri.id} nutri={nutri} />
            ))}
        </div>
    );
}
