import FolderIcon from "@mui/icons-material/Folder";
import {
    Avatar,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Grid,
    TextField
} from "@mui/material";
import { useMemo, useState } from "react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import "./styles.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ProfileInfo() {
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();

  const isEmailValid = useMemo(() => {
    return email && EMAIL_REGEX.test(email);
  }, [email]);

  return (
    <>
      <Grid container spacing={2} className="user-info">
        <Grid item md={2}>
          <Avatar
            style={{
              width: "110px",
              height: "110px",
              backgroundColor: "lightblue",
              color: "black",
              fontSize: "3rem",
            }}
          >
            АВ
          </Avatar>
        </Grid>
        <Grid item md={10}>
          <div className="user-name-text">Алхасов Валех</div>
          <div className="contacts-box">
            <div>
              <FolderIcon />
              <a href="https://t.me/Snake_2077">Telegram</a>
            </div>
            <div>
              <FolderIcon />
              <a href="https://github.com/Alkhasov77">Github</a>
            </div>
            <div>
              <FolderIcon />
              <a href="https://stavropol.hh.ru/resume/ba530dcaff0c85946c0039ed1f6245626a3777">
                Резюме
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
      <Divider />
      <div className="form-box">
        <div>
          <FormControl>
            <FormLabel component="legend">Номер телефона</FormLabel>
          </FormControl>
          <div>
            <InputMask
              mask="+7 (999) 999-99-99"
              disabled={false}
              maskChar=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >
              {/*@ts-ignore*/}
              {() => <TextField variant="outlined" />}
            </InputMask>
          </div>
        </div>
        <div>
          <FormControl>
            <FormLabel component="legend">Email</FormLabel>
          </FormControl>
          <div>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!isEmailValid && Boolean(email)}
              helperText={!isEmailValid && email && "Неверный формат email"}
            />
          </div>
        </div>
        <div className="button-box">
          <Button size="large" variant="contained" component={Link} to="/form">
            Начать
          </Button>
        </div>
      </div>
    </>
  );
}
