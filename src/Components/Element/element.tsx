import { Button, CardMedia } from "@mui/material";
import React from "react";
import { Route } from "react-router-dom";
import { ElementFlags } from "typescript";
import element from './element.module.css';

type elements = {
    nome:    string,
    telefone: string,
    endereco: string,
    email:    string
}

 export default function Element(companies: elements){
    return(
        <div className={element.elementBody} >
            <div className={element.img}>
                
            </div>
            <div className={element.textArea}>
                <p>
                   <b>Nome:</b> {companies.nome}
                </p>
                <p>
                   <b>Contato:</b>{companies.endereco}
                </p>
            </div>
            <div className={element.hiddenArea}>
               <Button variant="text">Ver Funcionários</Button>
               <Button variant="text">Contatar Empresa</Button>
            </div>
        </div>
    )
};

