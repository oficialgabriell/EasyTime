import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import './style.scss';
const PainelLogin: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);


  return (
    <div className='bg-Custom'>
      <Container className="mt-5 d-flex align-items-center w-100" style={{ width: '60rem' }}>
        <img
          src="https://i.imgur.com/TrLvVCq.jpg"  // Substitua pela URL direta da imagem
          alt="Logo"
          width="600"
          height="600"
          style={{
            float: 'right',
            marginRight: '0',
            marginLeft: 'auto', // Aspas simples corretamente fechadas aqui
            marginTop: '-3.75rem'
          }}
        />
        <Card className='bg-transparent border-0 mx-2 w-20rem'>
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
                  className='my-2'
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

              <Button className="d-block mx-auto mt-5" variant="primary" type="button">
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
