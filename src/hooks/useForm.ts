import { useEffect, useMemo, useState, ChangeEvent } from "react";

//Custom Hook para el manejo de formularios, permite validaciones también

interface FormState {
  [key: string]: string;
}

interface ValidationFunction {
  (value: string): boolean;
}

interface FormValidation {
  [key: string]: [ValidationFunction, string];
}

interface FormHooks {
  [key: string]:
    | string
    | ((event: ChangeEvent<HTMLInputElement>, fieldName?: string) => void)
    | boolean;
  onInputChange: (
    event: ChangeEvent<HTMLInputElement>,
    fieldName?: string
  ) => void;
  onResetForm: () => void;
  isFormValid: boolean;
}

export const useForm = (
  initialForm: FormState = {},
  formValidations: FormValidation = {}
): FormHooks => {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [formValidation, setFormValidation] = useState<FormValidation>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (!formValidation[formValue][0](formState[formValue])) return false;
    }

    return true;
  }, [formValidation, formState]);

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName?: string
  ): void => {
    const { value, name } = event.target;
    setFormState((prevState) => {
      const updatedState: FormState = { ...prevState };
      // Use type assertion for the vehicleModel field
      updatedState[fieldName || name] =
        fieldName === "vehicleModel" ? (value as string) : value;
      return updatedState;
    });
  };

  const onResetForm = (): void => {
    setFormState(initialForm);
  };

  const createValidators = (): void => {
    const formCheckedValues: FormValidation = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = [fn, errorMessage];
    }

    setFormValidation(formCheckedValues);
  };

  const formHooks: FormHooks = {
    ...formState,
    onInputChange,
    onResetForm,
    isFormValid,
    ...formValidation,
  };

  return formHooks;
};
