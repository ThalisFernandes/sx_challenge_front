import { AxiosError } from "axios";


export const errorInterceptor = (error: AxiosError)=>{
    if(error.message === 'Network Error'){
        return Promise.reject(new Error('Deu erro na connexão !!!'));
    }

    if(error.response?.status === 400){
        return Promise.reject(new Error('Erro na busca pelo Endpoint!!!'))
    }

    return Promise.reject(error);
};