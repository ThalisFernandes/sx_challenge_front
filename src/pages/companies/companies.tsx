import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import ResponsiveAppBar from "../Screen_moldura/screen_moldura";
import compStyle from "./companies.module.css";
import { GiPaperPlane } from "react-icons/gi";
import { companies, companiesService } from "../../services/companies/companiesService";
import API from "../../services/api";
const fieldNames = ['nome','cnpj','telefone','email','endereço']
export default function Companies() {

  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');

 function data():void {
    const Data: companies  = {nome, cnpj, telefone, email, endereco};
    let url = '/companies'
    companiesService.createCompany(Data);
    window.location.href = '/';
  } 

  function emailValidation(str: string){
    let pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    let isValid = pattern.test(str);

    return isValid;
  }

  return (
    <div className={compStyle.mainFrame}>
      <ResponsiveAppBar />
      <div className={compStyle.contentArea}>
        <div className={compStyle.formArea}>
            <Grid
              container
              rowSpacing={1}
              spacing={{ xs: 1, sm: 2, md: 3 }}
              columns={{ xs: 2, sm: 4, md: 4 }}
            >
             

              <Grid item xs={4} md={4} key={0} className={compStyle.card}>
                    <TextField id="outlined-basic" value={nome}required onChange={(e)=> setNome(e.target.value)} label={fieldNames[0]} variant="outlined" className="Values"/>
                </Grid>
                <Grid item xs={4} md={4} key={1} className={compStyle.card}>
                    <TextField id="outlined-basic" required value={cnpj} onChange={(e)=> setCnpj(e.target.value)} label={fieldNames[1]} variant="outlined" className="Values"/>
                </Grid>
                <Grid item xs={4} md={4} key={2} className={compStyle.card}>
                    <TextField id="outlined-basic" value={telefone} onChange={(e)=> setTelefone(e.target.value)} label={fieldNames[2]} variant="outlined" className="Values"/>
                </Grid>
                <Grid item xs={4} md={4} key={3} className={compStyle.card}>
                    <TextField id="outlined-basic" value={email} onChange={(e)=> setEmail(e.target.value)} label={fieldNames[3]} variant="outlined" className="Values"/>
                </Grid>
                <Grid item xs={4} md={4} key={4} className={compStyle.card}>
                    <TextField id="outlined-basic" value={endereco} onChange={(e)=> setEndereco(e.target.value)} label={fieldNames[4]} variant="outlined" className="Values"/>
                </Grid>
            </Grid>
            <div className={compStyle.btnArea}>
              <input type="button" value="Inserir" className={compStyle.btn}  id="btn" onClick={()=>data()}/>
            </div>
            
        </div>
      </div>
    </div>
  );
}

