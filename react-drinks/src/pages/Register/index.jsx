
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';


export const Register = () => {



    const initialValues = {
        name: "",
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        email: Yup.string().required('La categoría es requerido'),
        password: Yup.string().required('la contraseña es obligatoria')
    });

    const handleSubmit = (values) => {
        console.log(values);

    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                    

                        <Form.Group>
                            <Form.Label htmlFor='name'>Nombre</Form.Label>
                            <Field
                                id='name'
                                type='text'
                                placeholder='Tu Nombre'
                                name='name'
                                as={Form.Control}
                            />
                            <ErrorMessage
                                name='name'
                                component={Form.Text}
                                className='text-danger ms-2'
                            />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Field
                                id='email'
                                type='text'
                                placeholder='Tu Email'
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
                            <Form.Label htmlFor='password'>Contraseña</Form.Label>
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
                    
                    <Row className='justify-content-end mt-3'>
                        <Col md={3}>
                            <Button variant='dark'
                                disabled={false}
                                className='w-100'
                                type='submit'>
                                   Registrate
                                </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};
