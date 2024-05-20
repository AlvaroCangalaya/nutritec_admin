import axios from 'axios'
const nutriApi = axios.create({
    baseURL:"http://127.0.0.1:8000/nutritec/Usuario/"
})
export const getAllNutri=()=>nutriApi.get("/");
export const getAll=(id)=>nutriApi.get(`/${id}/`);
export const createNutri=(nutri)=>nutriApi.post("/",nutri);
export const deleteNutri = (id) => nutriApi.delete(`/${id}`);
export const updateNutri = (id,nutri) => nutriApi.put(`/${id}/`,nutri);
