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
  Fab,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../Screen_moldura/screen_moldura";
import style from "../home/home.module.css";
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
import { Employers, employerService } from "../../services/employers/employersService";

type result = {
  nome: string;
  telefone: string;
  endereco: string;
};

const img = new Image();
img.src =
  "https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-221431012.jpg";
export default function Allemployers() {
  const [dados, setDados] = useState<Array<Employers>>();
  useEffect(() => {
    ret();
  }, []);
  async function ret() {
    let comp = window.location.pathname.split('/');
    const result = await employerService.getEmployers(comp[-1]);
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
                width: "100%",
                flexDirection: "row",
                height:"10rem"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                  width:"80%"
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
              </Box>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
