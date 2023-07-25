import { Formik, Form, Field, ErrorMessage } from 'formik';
//import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, DivMyForm, Label } from '../ContactForm/ContactForm.styled';
import { register } from 'redux/auth/operations';

const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const InputField = styled(Field)`
    outline: none;
    padding: 5px 8px;
    margin-bottom: 10px;
    width: 250px;
    font-size: 18px;
`;

const ErrorField = styled(ErrorMessage)`
  color: red;
  font-size: 10px;
`

export const RegistredForm = () => {

    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };

    return (
        <DivMyForm>
        <Formik
            initialValues = {initialValues}
            //validationSchema = {schema}
            onSubmit = {(values, {resetForm}) => {
              
              handleSubmit(values);
              resetForm();
            }}
        >
            <Form>
                <Label>
                 Name
                </Label>
                <InputField 
                    type="text"
                    name="name"
                />
                <ErrorField name="name" component="div" />
                <Label>
                    Email
                </Label>
                <InputField 
                    type="mail"
                    name="email"
                />
                <ErrorField name="phone" component="div" />
                <InputField 
                    type="password"
                    name="password"
                />
                <ErrorField name="phone" component="div" />
                <Button type="submit">Add contact</Button>
            </Form>
          </Formik>
        </DivMyForm>
    )
}