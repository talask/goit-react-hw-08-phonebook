import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, DivMyForm, Label } from '../ContactForm/ContactForm.styled';
import { register } from 'redux/auth/operations';

const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });
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
    
    const handleSubmit = values => {
       
        dispatch(
          register({
            ...values
          })
        );
       
      };

    return (
        <DivMyForm>
        <Formik
            initialValues = {initialValues}
            validationSchema = {schema}
            onSubmit = {(values, {resetForm}) => {
              console.log(values);
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
                <ErrorField name="email" component="div" />
                <Label>
                    Password
                </Label>
                <InputField 
                    type="password"
                    name="password"
                />
                <ErrorField name="password" component="div" />
                <Button type="submit">Registrated</Button>
            </Form>
          </Formik>
        </DivMyForm>
    )
}