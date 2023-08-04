import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import useCategories from '../../hooks/useCategories';
import useDrinks from '../../hooks/useDrinks';
import styled from 'styled-components';

const StyledForm = styled(Form)`
width: 90%;
`;

const StyledLabel = styled(Form.Label)`
  color: white;
  text-shadow: 2px 2px 4px black;
`;

const StyledFormControl = styled(Form.Control)`
background-color: #F36541;

`;

const StyledSelect = styled(Form.Select)`
background-color: #F36541;
`;


export function SearchForm() {
  const { categories } = useCategories();
  const { getDrink, loading } = useDrinks();
  const [loadingText, setLoadingText] = useState("Buscar Bebidas");

  const initialValues = {
    ingredient: "",
    category: ""
  };

  const validationSchema = Yup.object({
    ingredient: Yup.string().required('El nombre es obligatorio'),
    category: Yup.string().required('La categoría es obligatoria')
  });

  const handleSubmit = (values) => {
    console.log(values);
    setLoadingText("Buscando...");
    getDrink(values).finally(() => setLoadingText("Buscar Bebidas"));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <StyledLabel htmlFor='ingredient'>Ingrediente</StyledLabel>
                <Field
                  id='ingredient'
                  type='text'
                  placeholder='Ej. Tequila, Vodka Ect'
                  name='ingredient'
                  as={StyledFormControl} />
                <ErrorMessage
                  name='ingredient'
                  component={Form.Text}
                  className='text-danger ms-2' />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <StyledLabel htmlFor='category'>Categoria bebida</StyledLabel>
                <Field
                  id='category'
                  name='category'
                  as={StyledSelect}
                >
                  <option value="">- Seleccione Categoria -</option>
                  {categories.sort((a, b) => (a.strCategory > b.strCategory ? 1 : a.strCategory < b.strCategory ? -1 : 0)).map(category => (
                    <option
                      value={category.strCategory}
                      key={category.strCategory}
                    >
                      {category.strCategory}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name='category'
                  component={Form.Text}
                  className='text-danger ms-2' />
              </Form.Group>
            </Col>
          </Row>
          <Row className='justify-content-end mt-3'>
            <Col md={3}>
              <Button variant='danger' disabled={loading} className='w-100' type='submit'>
                {loading ? loadingText : "Buscar Bebidas"}
              </Button>
            </Col>
          </Row>
        </StyledForm>
      )}
    </Formik>
  );
}


