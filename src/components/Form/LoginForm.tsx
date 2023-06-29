"use client"
import { useFormik } from "formik";
import { validationSchema  } from "@/lib/validation";
import { Form, Button, Container, Input, ErrorMessage } from "./Form.styled";


export function LoginForm() {

    
      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema,
        onSubmit: () => {

        },
      });

      return (
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}
    
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
            <Button type="submit">Login</Button>
          </Form>
        </Container>
      );
}