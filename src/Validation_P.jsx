import { Container, TextField, Button, Typography, Box } from "@material-ui/core";
import useInput from "./hooks/useInput";
import Headerx from "./companents/Header";
import 'bootstrap/dist/css/bootstrap.min.css';






const Validation_P = () => {
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
  const password = useInput('', { isEmpty: true, minLength: 5, })



  return (
    
    <Container maxWidth="sm">
      
      <Box mt={4}>
      
        <div style={{ margin: "20px", maxWidth: "400px" }}>
          <form>
            <Typography variant="h4" align="center">Validation</Typography>
            {/* {(email.isDirty && email.isEmailError) && <div style={{ color: "red" }}>Invalid email format</div>}
            {(email.isDirty && email.isEmpty) && <div style={{ color: "red" }}>Field cannot be empty</div>}
            {(email.isDirty && email.isMinLengthError) && <div style={{ color: "red" }}>Invalid minimum length</div>} */}
            
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
            {/* {(password.isDirty && password.isEmpty) && <div style={{ color: "red" }}>Field cannot be empty</div>}
            {(password.isDirty && password.isMinLengthError) && <div style={{ color: "red" }}>Invalid length</div>} */}
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

export default Validation_P;
