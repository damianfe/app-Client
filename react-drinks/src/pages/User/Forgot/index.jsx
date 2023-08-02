import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Button, } from 'react-bootstrap';
import * as Yup from 'yup';
// Otras importaciones y configuraciones

 export const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Ingresa un correo electrónico válido').required('El correo electrónico es requerido'),
  });

  const handleSubmit = (values) => {
    // Aquí puedes enviar una solicitud al servidor para enviar el correo electrónico con el enlace de restablecimiento de contraseña.
    console.log('Enviar correo electrónico para restablecer contraseña:', values.email);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className='col-6 mx-auto'>
          { /* Resto del código del formulario */}
          <Form.Group>
            <Form.Label htmlFor='email' style={{ color: 'white', textShadow: '2px 2px 4px black' }}>
              Correo electrónico
            </Form.Label>
            <Field
              id='email'
              type='text'
              placeholder='user@gmail.com'
              name='email'
              as={Form.Control}
            />
            <ErrorMessage
              name='email'
              component={Form.Text}
              className='text-danger ms-2'
            />
          </Form.Group>
          <Button variant='dark' className='w-100' type='submit'>
            Restablecer contraseña
          </Button>
        </Form>
      )}
    </Formik>
  );
};


