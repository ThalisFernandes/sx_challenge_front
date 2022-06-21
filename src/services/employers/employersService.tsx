import { AxiosResponse } from "axios";
import internal from "stream";
import API from "../api";

export interface Employers {
    cpf: string,
    nome: string,
    telefone: string,
    email: string,
    endereco: string,
    empresa: string
}

type allEmployers = {
    result: Array<Employers>
}



async function getEmployers(comp:string): Promise<AxiosResponse<allEmployers>> {

    let company = window.location.pathname.split('/');
    const url = comp !== undefined ?`/employer/${comp}` : `/employer/${company[2]}`;
    console.log(url);
    return await API.get(url); 
}
async function createEmployer(data:Employers){
    const url = `/employer`;
    if(data.nome && data.nome !== undefined) return await API.post(url, data);
}

export const employerService = {
    getEmployers,
    createEmployer
}