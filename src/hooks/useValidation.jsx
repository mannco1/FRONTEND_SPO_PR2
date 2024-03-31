/* eslint-disable default-case */
import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [isMinLengthError, setMinLengthError] = useState(true);
    const [isMaxLengthError, setMaxLengthError] = useState(true);
    const [isEmailError, setEmailError] = useState(true);
    const [inputValid, setInputValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      let errorMessage = "";
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            if (value.length < validations[validation]) {
              setMinLengthError(true);
              errorMessage += `Минимальная длина ${validations[validation]}. `;
            } else {
              setMinLengthError(false);
            }
            break;
          case 'isEmpty':
            if (!value) {
              setEmpty(true);
              errorMessage += "Поле не должно быть пустым. ";
            } else {
              setEmpty(false);
            }
            break;
          case 'maxLength':
            if (value.length > validations[validation]) {
              setMaxLengthError(true);
              errorMessage += `Максимальная длина ${validations[validation]}. `;
            } else {
              setMaxLengthError(false);
            }
            break;
          case 'isEmail':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              setEmailError(true);
              errorMessage += "Неверный формат email. ";
            } else {
              setEmailError(false);
            }
            break;
        }
      }
      setErrorMessage(errorMessage);
    }, [value, validations]);

    useEffect(() => {
      if (isEmpty || isMinLengthError || isEmailError || isMaxLengthError) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    }, [isEmpty, isMinLengthError, isMaxLengthError, isEmailError]);

    return {
      isEmpty,
      isMinLengthError,
      isMaxLengthError,
      isEmailError,
      inputValid,
      errorMessage,
    };
}

export default useValidation;
