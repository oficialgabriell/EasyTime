import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import './style.scss';
const PainelLogin: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className=' bg-Custom' style={{paddingTop: '8.75rem'}}>
    <Container className="mt-5 d-flex align-items-center">
      <Card className='bg-transparent'>
        <Card.Header className='text-center customColor grayBackground'>
          <h2>Login</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="" controlId="formBasicMatricula">
              <Form.Label>Matrícula</Form.Label>
              <Form.Control
                type="text"
                placeholder="@123456"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className=""variant="primary" type="button">
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default PainelLogin;
