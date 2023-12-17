import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import "./styles.css";

interface Props {
  formik: ReturnType<typeof useFormik<any>>;
}

export default function StepThirdForm({ formik }: Props) {
  return (
    <>
      <Grid item md={12} sm={12} xs={12}>
        <div className="about-box">
          <TextField
            name="about"
            fullWidth
            multiline
            rows={4}
            value={formik.values.about}
            onChange={formik.handleChange}
            inputProps={{ maxLength: 200, style: { resize: "block" } }}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about && <>{formik.errors.about}</>}
          />
          <span className="about-text">
            {formik.values.about?.length} / 200
          </span>
        </div>
      </Grid>
    </>
  );
}
