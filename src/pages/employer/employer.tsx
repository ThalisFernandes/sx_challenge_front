import {
    Autocomplete,
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../Screen_moldura/screen_moldura";
import compStyle from "../companies/companies.module.css";
import { GiPaperPlane } from "react-icons/gi";
import API from "../../services/api";
import { Employers, employerService } from "../../services/employers/employersService";
import {
  companies,
  companiesService,
} from "../../services/companies/companiesService";

import Select from 'react-select';

const fieldNames = ["nome", "cpf", "telefone", "email", "endereço", "empresa"];

interface InputWrapperProps {
  children?: React.ReactNode;
}

interface optionValues{
    value: string
    label: string
}

export default function Employer() {
  const [dados, setDados] = useState<Array<companies>>();
  useEffect(() => {
    ret();
  }, []);

  let options: Array<optionValues> = [];
  dados?.map((element)=>{
      options.push({"value":element.nome, "label":element.nome})
  })
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [empresa, setEmpresa] = useState("");

  function data(): void | undefined{
    const Data: Employers = { cpf, nome, telefone, email, endereco, empresa };
    let url = "/employer";
    employerService.createEmployer(Data);
    window.location.href = "/";
  }

  function emailValidation(str: string) {
    let pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    let isValid = pattern.test(str);

    return isValid;
  }
  async function ret() {
    const result = await companiesService.getCompanies();
    return setDados(result.data.result);
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
              <TextField
                id="outlined-basic"
                value={nome}
                required
                onChange={(e) => setNome(e.target.value)}
                label={fieldNames[0]}
                variant="outlined"
                className="Values"
              />
            </Grid>
            <Grid item xs={4} md={4} key={1} className={compStyle.card}>
              <TextField
                id="outlined-basic"
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                label={fieldNames[1]}
                variant="outlined"
                className="Values"
              />
            </Grid>
            <Grid item xs={4} md={4} key={2} className={compStyle.card}>
              <TextField
                id="outlined-basic"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                label={fieldNames[2]}
                variant="outlined"
                className="Values"
              />
            </Grid>
            <Grid item xs={4} md={4} key={3} className={compStyle.card}>
              <TextField
                id="outlined-basic"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label={fieldNames[3]}
                variant="outlined"
                className="Values"
              />
            </Grid>
            <Grid item xs={4} md={4} key={4} className={compStyle.card}>
              <TextField
                id="outlined-basic"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                label={fieldNames[4]}
                variant="outlined"
                className="Values"
              />
            </Grid>
            <div className={compStyle.btnArea}>
                <Select
                defaultValue={options[0]}
                isSearchable={true}
                name="Empresa"
                className={compStyle.select}
                options={options} />
            </div>
          </Grid>
          <div className={compStyle.btnArea}>
            <input
              type="button"
              value="Inserir"
              className={compStyle.btn}
              id="btn"
              onClick={() => data()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
