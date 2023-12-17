import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

export default function SuccessModal() {
  return (
    <Modal title="Форма успешно отправлена">
      <div
        style={{
          color: "green",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <CheckCircleOutlineIcon fontSize="large" />
        </div>
        <div>
          <Button size="large" variant="contained" component={Link} to="/">
            На главную
          </Button>
        </div>
      </div>
    </Modal>
  );
}
