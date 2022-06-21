import {
  AppBar,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Box,
  Fab
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../Screen_moldura/screen_moldura";
import style from "./home.module.css";
import Element from "../../Components/Element/element";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import {
  companies,
  companiesService,
} from "../../services/companies/companiesService";
import { BsPlusCircleFill } from "react-icons/bs";
import ButtonCreateCompanies from "../../Components/addButtonCompanies/addButtonComp";
import { Link } from "react-router-dom";

type result = {
  nome: string;
  telefone: string;
  endereco: string;
};

export default function Home() {
  const [dados, setDados] = useState<Array<companies>>();
  useEffect(() => {
    ret();
  }, []);
  async function ret() {
    const result = await companiesService.getCompanies();
    setDados(result.data.result);
  }

  return (
    <div className={style.mainFrame}>
      <ResponsiveAppBar />
      <div className={style.contentArea}>
        {dados?.map((element, index) => {
          // return <Element nome={element.nome} telefone={element.telefone} endereco={element.endereco} email={element.email} key={index} />
          return (
            <Card
              sx={{
                display: "flex",
                marginRight: "1rem",
                marginTop: "1rem",
                width: "30rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Nome: {element.nome}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Endereço: {element.endereco}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Contato: {element.telefone}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <Button variant="contained" sx={{ marginRight: "1rem" }}>
                    <Link to={`/employer/${element.nome}`}> Ver Funcionarios </Link>
                  </Button>
                  <Button
                    variant="text"
                    sx={{ marginRight: "1rem" }}
                    color="secondary"
                  >
                    Entrar em contato
                  </Button>
                </Box>
              </Box>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
