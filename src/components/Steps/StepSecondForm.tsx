import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useCallback } from "react";
import "./styles.css";

interface Props {
  formik: ReturnType<typeof useFormik<any>>;
}

export default function StepSecondForm({ formik }: Props) {
  const removeAdvantage = useCallback(
    (index: number) => {
      const advantages = [...formik.values.advantages];
      advantages.splice(index, 1);

      formik.setFieldValue("advantages", advantages);
    },
    [formik]
  );

  const addAdvantage = useCallback(() => {
    formik.setFieldValue("advantages", [...formik.values.advantages, ""]);
  }, [formik]);

  return (
    <>
      <Grid item md={12}>
        <FormControl>
          <FormLabel component="legend">Преимущества</FormLabel>
        </FormControl>
        {formik.values.advantages.map((value: string, index: number) => (
          <div className="advantage-control">
            <TextField
              type="text"
              value={value}
              name={`advantages[${index}]`}
              placeholder="Введите текст"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                Array.isArray(formik.touched.advantages) &&
                formik.touched.advantages[index] &&
                Array.isArray(formik.errors.advantages) &&
                Boolean(formik.errors.advantages[index])
              }
              helperText={
                Array.isArray(formik.touched.advantages) &&
                formik.touched.advantages[index] &&
                Array.isArray(formik.errors.advantages) && (
                  <>{formik.errors.advantages[index]}</>
                )
              }
            />
            <div className="advantage-control-remove-icon">
              <IconButton
                aria-label="Удалить форму"
                onClick={() => removeAdvantage(index)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}

        <div>
          <IconButton onClick={addAdvantage}>
            <AddIcon />
          </IconButton>
        </div>
      </Grid>

      <Grid item md={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Checkbox группа</FormLabel>
          <div>
            <Checkbox
              checked={formik.values.option1}
              onChange={formik.handleChange}
              name="option1"
            />
          </div>
          <div>
            <Checkbox
              checked={formik.values.option2}
              onChange={formik.handleChange}
              name="option2"
            />
          </div>
          <div>
            <Checkbox
              checked={formik.values.option3}
              onChange={formik.handleChange}
              name="option3"
            />
          </div>
        </FormControl>
      </Grid>

      <Grid item md={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Radio группа</FormLabel>
          <RadioGroup
            value={formik.values.radio}
            onChange={formik.handleChange}
            name="radio"
          >
            <FormControlLabel value="option1" control={<Radio />} label="1" />
            <FormControlLabel value="option2" control={<Radio />} label="2" />
            <FormControlLabel value="option3" control={<Radio />} label="3" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );
}
