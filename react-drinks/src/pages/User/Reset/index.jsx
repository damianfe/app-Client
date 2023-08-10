import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { resetPassword } from '../../../services/auth.service'; // Importa el servicio

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const responseMessage = await resetPassword(token, password);
            setMessage(responseMessage);
            setError('');
        } catch (error) {
            setError('Error al restablecer la contraseña');
        }
    };
    return (
        <div className="reset-password-container">
            <h2>Restablecer Contraseña</h2>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="password">
                    <Form.Label>Nueva Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirmar Nueva Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Restablecer Contraseña
                </Button>
            </Form>
        </div>
    );
};

export default ResetPassword;
