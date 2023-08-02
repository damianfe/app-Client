
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import * as Yup from 'yup';
import useAuth from '../../../hooks/authProvider';
import { Link } from 'react-router-dom';




export const Login = () => {


    const { login, alert } = useAuth()

    const initialValues = {

        email: "",
        password: ""
    };

    const validationSchema = Yup.object({

        email: Yup.string().required('La categoría es requerido'),
        password: Yup.string().required('la contraseña es obligatoria')
    });

    const handleSubmit = (values) => {
        login(values)

    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit} className='col-6 mx-auto'>

                    {alert && <Alert variant='danger'>{alert}</Alert>}

                    <Form.Group>
                        <Form.Label htmlFor='email' style={{
                            color: "white",
                            textShadow: "2px 2px 4px black"
                        }}>Email</Form.Label>
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
                    <Form.Group>
                        <Form.Label htmlFor='password' style={{
                            color: "white",
                            textShadow: "2px 2px 4px black"
                        }}>Contraseña</Form.Label>
                        <Field
                            id='password'
                            type='password'
                            name='password'
                            as={Form.Control}
                        />

                        <ErrorMessage
                            name='password'
                            component={Form.Text}
                            className='text-danger ms-2'
                        />
                    </Form.Group>

                    <Row className='justify-content-between mt-3'>
                        <Col md={6}>
                            <Button variant='dark' className='w-100' type='submit'>
                                Iniciar Sesión
                            </Button>
                        </Col>
                        <Col md={6} className='text-end'>
                            <Link to='/forgotpass' style={{ color: 'white', textDecoration: 'underline' }}>
                                ¿Olvidaste la contraseña?
                            </Link>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};
