import {
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";

interface Props {
  formik: ReturnType<typeof useFormik<any>>;
}

export default function StepFirstForm({ formik }: Props) {
  return (
    <>
      <Grid item md={5}>
        <Grid container spacing={4}>
          <Grid item md={12} sm={12} xs={12}>
            <FormControl fullWidth>
              <FormLabel component="legend">Никнейм</FormLabel>
              <TextField
                name="nickname"
                placeholder="Введите никнейм"
                value={formik.values.nickname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.nickname && Boolean(formik.errors.nickname)
                }
                helperText={
                  formik.touched.nickname && <>{formik.errors.nickname}</>
                }
              />
            </FormControl>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <FormControl fullWidth>
              <FormLabel component="legend">Имя</FormLabel>
              <TextField
                name="name"
                placeholder="Введите имя"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && <>{formik.errors.name}</>}
              />
            </FormControl>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <FormControl fullWidth>
              <FormLabel component="legend">Фамилия</FormLabel>
              <TextField
                name="sername"
                placeholder="Введите фамилию"
                value={formik.values.sername}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.sername && Boolean(formik.errors.sername)}
                helperText={
                  formik.touched.sername && <>{formik.errors.sername}</>
                }
              />
            </FormControl>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <FormControl fullWidth>
              <FormLabel component="legend">Пол</FormLabel>
              <TextField
                select
                value={formik.values.sex}
                placeholder="Не выбрано"
                name="sex"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.sex && Boolean(formik.errors.sex)}
                helperText={formik.touched.sex && <>{formik.errors.sex}</>}
              >
                <MenuItem value="man">мужской</MenuItem>
                <MenuItem value="woman">женский</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
