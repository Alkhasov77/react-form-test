import { Button, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { setNestedObjectValues, useFormik } from "formik";
import { useCallback, useMemo, useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import StepFirstForm from "../Steps/StepFirstForm";
import StepSecondForm from "../Steps/StepSecondForm";
import StepThirdForm from "../Steps/StepThirdForm";
import SuccessModal from "../SuccessModal/SuccessModal";
import "./styles.css";

function validateForm(values: any) {
  const errors = {} as any;

  if (!values.nickname) {
    errors.nickname = "Введите никнейм";
  } else if (values.nickname.length > 30) {
    errors.nickname = "Максимальная длина 30 символов";
  } else if (!/^[a-zA-Z0-9]+$/.test(values.nickname)) {
    errors.nickname = "Никнейм может содержать только буквы и цифры";
  }

  if (!values.name) {
    errors.name = "Введите имя";
  } else if (values.name.length > 50) {
    errors.name = "Максимальная длина 50 символов";
  } else if (!/^[a-zA-Z]+$/.test(values.name)) {
    errors.name = "Имя может содержать только буквы";
  }

  if (!values.sername) {
    errors.sername = "Введите фамилию";
  } else if (values.sername.length > 50) {
    errors.sername = "Максимальная длина 50 символов";
  } else if (!/^[a-zA-Z]+$/.test(values.sername)) {
    errors.sername = "Фамилия может содержать только буквы";
  }

  if (!values.sex) {
    errors.sex = "Выберите пол";
  }

  if (values.advantages?.length) {
    errors.advantages = [];

    values.advantages.forEach((x: string, index: number) => {
      if (!x) {
        errors.advantages[index] = "Обязательное поле";
      }
    });

    if (!errors.advantages.length) {
      delete errors.advantages;
    }
  }

  return errors;
}

const steps = [1, 2, 3];

export default function ProfileForm() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      nickname: "",
      name: "",
      sername: "",
      sex: "",
      option1: false,
      option2: false,
      option3: false,
      advantages: [""],
      about: "",
    },
    validate: validateForm,
    onSubmit: () => {},
  });

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      const errors = await formik.validateForm();
      formik.setErrors(errors);
      formik.setTouched(setNestedObjectValues(errors, true));

      const fetchPost = async () => {
        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formik.values),
        });

        const data = await response.json();

        return data;
      };

      if (Object.keys(errors).length) {
        setIsErrorModalOpen(true);
      } else {
        setIsSuccessModalOpen(true);
      }
    },
    [formik]
  );

  const [activeStep, setActiveStep] = useState(0);

  const handlePrevStep = useCallback(() => {
    setActiveStep(activeStep - 1);
  }, [activeStep]);

  const handleNextStep = useCallback(() => {
    setActiveStep(activeStep + 1);
  }, [activeStep]);

  const isPrevButtonDisabled = useMemo(() => {
    if (activeStep === 0) {
      return true;
    }

    return false;
  }, [activeStep]);

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          {activeStep === 0 && <StepFirstForm formik={formik} />}
          {activeStep === 1 && <StepSecondForm formik={formik} />}
          {activeStep === 2 && <StepThirdForm formik={formik} />}
        </Grid>

        <div className="buttons-wrapper">
          <Button
            type="button"
            variant="outlined"
            onClick={handlePrevStep}
            disabled={isPrevButtonDisabled}
          >
            Назад
          </Button>
          {activeStep !== 2 && (
            <Button type="button" variant="contained" onClick={handleNextStep}>
              Вперед
            </Button>
          )}

          {activeStep === 2 && (
            <Button type="submit" variant="contained">
              Отправить
            </Button>
          )}
        </div>
      </form>

      {isSuccessModalOpen && <SuccessModal />}
      {isErrorModalOpen && (
        <ErrorModal onClose={() => setIsErrorModalOpen(false)} />
      )}
    </div>
  );
}
