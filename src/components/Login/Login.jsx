import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, DivMyForm, Label } from '../ContactForm/ContactForm.styled';
import { Div } from 'components/Common/App.styled';
import { logIn } from 'redux/auth/operations';

const initialValues = {
    email: '',
    password: '',
   
  };
  const schema = yup.object().shape({
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

export default function Login()  {

    const dispatch = useDispatch();
    
    const handleSubmit = values => {
       console.log(values)
        dispatch(
          logIn({
            ...values
          })
        );
       
      };

    return (
      <Div>
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
                 Email
                </Label>
                <InputField 
                    type="text"
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
                <Button type="submit">Log In</Button>
            </Form>
          </Formik>
        </DivMyForm>
      </Div>
    )
}