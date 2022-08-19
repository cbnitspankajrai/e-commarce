import {Container,Typography,Box,Avatar,Button,CssBaseline,TextField,Link,Grid,} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify"


const theme = createTheme();

export default function SignUp(props) { 
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.password === data.confirmpassword) {
      setError(
        "confirmpassword",
        { type: "validate", message: "Password does not match" },
        { shouldFocus: true }
      );
      return false;
    }

    //save data into database by api
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`,
        {
          name: `${data.firstname} ${data.lastname}`,
          email: data.email,
          password: data.password,
        },
        { withCredentials: true } // It is use for get the cookies in the response
      )
      .then((response) => {

        if(response.data.user){
          toast.success(response.data.message)
          props.setSignin(true);
        }})
      .catch((error) => {
        toast.error(error.response.data.message)

        
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                  error={Boolean(errors.firstname)}
                  helperText={errors.firstname?.message}
                  {...register("firstname", { required: "Enter first name" })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  error={Boolean(errors.lastname)}
                  helperText={errors.lastname?.message}
                  autoComplete="family-name"
                  {...register("lastname", { required: "Enter last name" })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  autoComplete="new-password"
                  {...register("password", { required: "Enter password" })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  error={Boolean(errors.confirmpassword)}
                  helperText={errors.confirmpassword?.message}
                  autoComplete="new-password"
                  {...register("confirmpassword", {
                    required: "Enter confirm password",
                  })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    props.setSignin(true);
                  }}
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
