/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */

import { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@material-ui/core";


const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [isMinLengthError, setMinLengthError] = useState(true)
  const [isMaxLengthError, setMaxLengthError] = useState(true)
  const [isEmail, setEmailError] = useState(true)
  const [inputValid, setInputValid] = useState(false)
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break
        case 'isEmail':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          emailRegex.test(value) ? setEmailError(false) : setEmailError(true);
          {<div style={{ color: "red" }}>Некорректный формат почты</div>}
          break;
      }

    }
  }, [value])

  useEffect(() => {
    if (isEmpty || isMinLengthError || isEmail){
      setInputValid(false)

    }
    else{
      setInputValid(true)
    }
}, [isEmpty, isMaxLengthError, isMinLengthError, isEmail])

  return {
    isEmpty,
    isMinLengthError,
    isMaxLengthError,
    isEmail,
    inputValid,
  }

}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations)
  const onChange = (e) => {
    setValue(e.target.value)

  }
  const onBlur = (e) => {
    setDirty(true);
  }



  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}

const App = () => {
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
  const password = useInput('', { isEmpty: true, minLength: 5, })



  return (

    <Container maxWidth="sm">
      <Box mt={4}>
       
    <div style={{ margin: "20px", maxWidth: "400px" }}>
      <form>
        <Typography variant="h4" align="center">Validation</Typography>
        {(email.isDirty && email.isEmailError) && <div style={{ color: "red" }}>Invalid email format</div>}
        {(email.isDirty && email.isEmpty) && <div style={{ color: "red" }}>Field cannot be empty</div>}
        {(email.isDirty && email.isMinLengthError) && <div style={{ color: "red" }}>Invalid minimum length</div>}
        {(password.isDirty && password.isEmpty) && <div style={{ color: "red" }}>Field cannot be empty</div>}
        {(password.isDirty && password.isMinLengthError) && <div style={{ color: "red" }}>Invalid length</div>}
        <TextField
          style={{ marginBottom: "10px" }}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
          name="email"
          type="text"
          label="Email"
          fullWidth
          variant="outlined"
          error={email.isDirty && (email.isEmpty || email.isEmailError || email.isMinLengthError)}
          helperText={
            email.isDirty &&
            (email.isEmpty
              ? "Field cannot be empty"
              : email.isEmailError
              ? "Invalid email format"
              : email.isMinLengthError && "Invalid minimum length")
          }
        />
        <TextField
          style={{ marginBottom: "10px" }}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
          name="password"
          type="password"
          label="Password"
          fullWidth
          variant="outlined"
          error={password.isDirty && (password.isEmpty || password.isMinLengthError)}
          helperText={
            password.isDirty &&
            (password.isEmpty ? "Field cannot be empty" : password.isMinLengthError && "Invalid length")
          }
        />
        <Button
          style={{ marginTop: "10px" }}
          variant="contained"
          color="primary"
          disabled={!email.inputValid}
          type="submit"
        >
          Registration
        </Button>
      </form>
    </div>
    </Box>
    </Container>
    )
}

export default App;
