import { Navigation } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const notesFormSchema = Yup.object({
  content: Yup.string().required("Обязательное поле"),
});

const NotesForm = () => {
  const initialValues = {
    content: "",
  };

  const addNote = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={notesFormSchema}
      onSubmit={addNote}
    >
      <Form className="notes__form">
        <div className="form-group">
          <label htmlFor="content">New Note</label>
          <Field
            className="form-field"
            component="textarea"
            rows="5"
            name="content"
          />
          <p className="error-text">
            <ErrorMessage name="content" />
          </p>
        </div>
        <button className="notes__btn notes__btn--add" type="submit">
          <Navigation className="navigation-icon" />
        </button>
      </Form>
    </Formik>
  );
};

export default NotesForm;
