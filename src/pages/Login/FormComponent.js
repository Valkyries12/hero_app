import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Box } from "@mui/material";
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
  form: {
    // border: "3px solid pink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  input: {
    marginTop: "15px",
    width: "100%",
    padding: "10px 18px",
    borderRadius: "4px",
  },
  labelText: {
    color: "#fff",
    fontSize: "22px",
  },
  errorMessage: {
    color: "#fff",
  },
  button: {
    marginTop: "20px",
  },
};

const FormComponent = () => {

    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, "Debe tener un máximo de 20 caracteres")
        .min(4, "Debe tener al menos 4 caracteres")
        .required("Password requerido"),
      email: Yup.string().email("Email inválido").required("Email requerido"),
    }),
    onSubmit: (values) => {
      //aca va la logica de la api para loguear
      axios
        .post("http://challenge-react.alkemy.org/", {
          email: `${values.email}`,
          password: `${values.password}`,
        })
        .then(function (response) {
          const token = JSON.stringify(response.data.token)
          localStorage.setItem("token", token);
          navigate("/home");
        })
        .catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data.error}`,
          })
        });
    },
  });

  return (
    <Box component="form" style={styles.form} onSubmit={formik.handleSubmit}>
      <label style={styles.labelText} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        style={styles.input}
      />

      {formik.touched.email && formik.errors.email ? (
        <div style={styles.errorMessage}>{formik.errors.email}</div>
      ) : null}

      <label style={styles.labelText} htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        style={styles.input}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={styles.errorMessage}>{formik.errors.password}</div>
      ) : null}
      <Button sx={styles.button} type="submit" variant="contained">
        Enviar
      </Button>
    </Box>
  );
};

export default FormComponent;
