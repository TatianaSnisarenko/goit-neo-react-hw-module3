import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  phone: "",
};

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    addContact(values.name, values.phone);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
          <Field
            id={nameFieldId}
            className={css.field}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label} htmlFor={phoneFieldId}>
          Number
          <Field
            id={phoneFieldId}
            className={css.field}
            type="tel"
            name="phone"
          />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </label>
        <button className={css.btn} type="submit" onSubmit={handleSubmit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
