import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import './style.scss';
const PainelLogin: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Função para bloquear o zoom com o scroll do mouse
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // Adiciona o listener do evento de rolagem do mouse
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []); // O array vazio [] assegura que o useEffect será executado apenas uma vez durante a montagem do componente


  return (
    <div className='bg-Custom' style={{ paddingTop: '2rem', display: 'flex'}}>
    <Container className="mt-5 d-flex align-items-center" style={{ width: '70%', height: '70%' }}>
      <Card className='bg-transparent'>
        <Card.Header className='text-center customColor grayBackground rounded'>
          <h2>Login</h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="" controlId="formBasicMatricula">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Matrícula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className="d-block mx-auto mt-3"variant="primary" type="button">
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
