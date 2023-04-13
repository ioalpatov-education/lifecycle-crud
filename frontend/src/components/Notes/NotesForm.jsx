import { Navigation } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const notesFormSchema = Yup.object({
  content: Yup.string().required("Обязательное поле"),
});

const NotesForm = ({ onAddNote }) => {
  const initialValues = {
    content: "",
  };

  const addNote = async (values, actions) => {
    actions.resetForm();

    await onAddNote({
      id: nanoid(),
      content: values.content,
    });
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

NotesForm.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NotesForm;
