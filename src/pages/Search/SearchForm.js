import React from "react";
import { Button, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const styles = {
  form: {
    // border: "3px solid pink",
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    border: "1px solid green",
  },
  input: {
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
    marginLeft: "14px",
    maxHeight: "40px"
  }
};

const SearchForm = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .max(20, "Debe tener un máximo de 20 caracteres")
        .min(4, "Debe tener al menos 4 caracteres")
        .required("Nombre requerido"),
    }),
    onSubmit: (values) => {
      //aca va la logica de la api para traer heroes
      axios
        .post("http://challenge-react.alkemy.org/", {
          search: `${values.search}`,
        })
        .then(function (response) {
          //TODO va cuando busco y me trae los datos de los heroes
        })
        .catch(function (error) {});
    },
  });
  return (
    <Box component="form" style={styles.form} onSubmit={formik.handleSubmit}>
      <Box>
        <input
          id="search"
          name="search"
          type="search"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.search}
          style={styles.input}
        />

        {formik.touched.search && formik.errors.search ? (
          <div style={styles.errorMessage}>{formik.errors.search}</div>
        ) : null}
      </Box>

      
        <Button sx={styles.button} type="submit" variant="contained">
          Buscar
        </Button>
      
    </Box>
  );
};

export default SearchForm;
