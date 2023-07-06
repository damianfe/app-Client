import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import useCategories from '../../hooks/useCategories';

export const SearchForm = () => {

  const { categories } = useCategories();


  const initialValues = {
    name: "",
    category: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    category: Yup.string().required('La categoría es obligatoria')
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
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor='name'>Nombre de la bebida</Form.Label>
                <Field
                  id='name'
                  type='text'
                  placeholder='Ej- Tequila, Vodka Ect'
                  name='name'
                  as={Form.Control}
                />
                <ErrorMessage
                  name='name'
                  component={Form.Text}
                  className='text-danger ms-2'
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor='category'>Seleccione La Categoría</Form.Label>
                <Field
                  id='category'
                  placeholder='Seleccione una categoría'
                  name='category'
                  as={Form.Select}
                >
                  <option value="">- Seleccione Categoria -</option>
                  {
                    categories.sort((a, b) => (a.strCategory > b.strCategory ? 1 : a.strCategory < b.strCategory ? -1 : 0)).map(category => (
                      <option
                        value={category.strCategory}
                        key={category.strCategory}
                      >
                        {category.strCategory}
                      </option>))
                  }
                </Field>

                <ErrorMessage
                  name='category'
                  component={Form.Text}
                  className='text-danger ms-2'
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='justify-content-end mt-3'>
            <Col md={3}>
              <Button variant='danger'
                disabled={false}
                className='w-100'
                type='submit'>Buscar Bebidas</Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
