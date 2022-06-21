import { AxiosResponse } from "axios";
import internal from "stream";
import API from "../api";

export interface companies {
    nome: string,
    cnpj: string,
    telefone: string,
    email: string,
    endereco: string
}

type allcompanies = {
    result: Array<companies>
}



async function getCompanies(): Promise<AxiosResponse<allcompanies>> {
        const url = `/companies`
        return await API.get(url); 
}
async function createCompany(data:companies){
    const url = `/companies`;
    if(data.nome && data.nome !== undefined) return await API.post(url, data);
}

export const companiesService = {
    getCompanies,
    createCompany
}