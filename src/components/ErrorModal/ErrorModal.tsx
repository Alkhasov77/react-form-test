import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "@mui/material";
import Modal from "../Modal/Modal";

interface Props {
  onClose: () => void;
}

export default function ErrorModal({ onClose }: Props) {
  return (
    <Modal title="Ошибка">
      <div
        style={{
          color: "green",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <HighlightOffIcon color="error" fontSize="large" />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            type="button"
            size="large"
            variant="contained"
            onClick={onClose}
          >
            Закрыть
          </Button>
        </div>
      </div>
    </Modal>
  );
}
