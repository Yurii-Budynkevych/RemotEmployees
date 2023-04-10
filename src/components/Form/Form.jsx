import "./Form.css";
import { Formik, Form, Field } from "formik";

export const SubscribeForm = () => {
  const init = {
    email: "",
  };

  const submitHandler = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={init} onSubmit={submitHandler}>
        <Form className="form" autoComplete="off">
          <Field
            className="form-field"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <button className="form-btn" type="sumbit">
            Subscribe
          </button>
        </Form>
      </Formik>
    </>
  );
};
