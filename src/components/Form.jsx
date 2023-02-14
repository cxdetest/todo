import { IoMdAdd } from 'react-icons/io';
import { useContext } from 'react';
import { Context } from './ContextReducer';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const TodoForm = () => {
  const { dispatch } = useContext(Context);

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={schema}
      onSubmit={(todo, { resetForm }) => {
        dispatch({ type: 'add', todo });
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.title && touched.title ? <span>{errors.title}</span> : null}
          <Field id='title' name='title' placeholder='title' />

          {errors.description && touched.description ? (
            <span>{errors.description}</span>
          ) : null}
          <Field
            id='description'
            name='description'
            placeholder='description'
          />
          <button
            type='submit'
            disabled={errors.description && touched.description ? true : false}
          >
            <IoMdAdd />
          </button>
        </Form>
      )}
    </Formik>
  );
};
