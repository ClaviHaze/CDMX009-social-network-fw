import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Avatar,
  Button,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import AttachmentIcon from '@material-ui/icons/Attachment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from "../assets/images/logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingTop: theme.spacing(2),
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  button: {
    borderColor: "#33517D",
    borderRadius: "40%",
  },
  buttonPadding: {
    paddingTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  confirmButton: {
    color: "#FFFFFF",
    backgroundColor: "#349CAA",
    borderRadius: 5,
  },
}));
const Profile = ({ history }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = "";
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState();

  const classes = useStyles();
  return (
    <>
      <header className={classes.root}>
        <Grid container direction="row-reverse" item sx={12}>
          <img src={logo} className={classes.logo} />
        </Grid>
      </header>
      <Grid container direction="row" justify="center" item sx={12}>
        <Avatar
          atl="imagen del usuario"
          src="https://i.ibb.co/F77rJHx/hombre2.jpg"
          className={classes.large}
        />
      </Grid>
      <Grid container direction="row" justify="center" item sx={12}>
        <div className={classes.buttonPadding}>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            endIcon={<AttachmentIcon/>}
            accept="image/x-png,image/gif,image/jpeg"
          >
            Editar
          </Button>
        </div>
      </Grid>
      <Grid container direction="row" justify="center" item sx={12}>
        <FormControl className={classes.formControl}>
          <TextField label="Nombre" />
          <TextField label="Nombre de usuario" />
          <TextField
            id="standard-multiline-static"
            label="Biografía"
            multiline
            rows={4}
          />
          <TextField
        id="date"
        label="Fecha de nacimiento"
        type="date"
        defaultValue="1997-02-26"
      />
          <FormControl>
            <InputLabel id="gender">Género</InputLabel>
            <Select
              native
              labelId="gender"
              id="gender"
              endIcon={<ArrowDropDownIcon />}
            >
              <option value="" />
              <option value="unicornio">Unicornio</option>
              <option value="helicopteroApache">Helicoptero Apache</option>
              <option value="furro">Furro</option>
              <option value="otaku">Otaku</option>
              <option value="chicaBasica">Chica Básica</option>
              <option value="niñoRata">Niño Rata</option>
            </Select>
          </FormControl>
        </FormControl>
      </Grid>
      <Grid container direction="row" justify="center" item sx={12}>
        <div className={classes.buttonPadding}>
          <Button className={classes.confirmButton}>Confirmar</Button>
        </div>
      </Grid>
    </>
  );
};

export default Profile;
