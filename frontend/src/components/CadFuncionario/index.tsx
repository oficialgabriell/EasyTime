import React, { useState, FormEvent } from 'react';
import { Button, Form, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const CadFuncionario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [nis, setNis] = useState('');
  const [genero, setGenero] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cargo, setCargo] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Funcionário cadastrado:\nNome: ${nome}\nCargo: ${cargo}`);
    setNome('');
    setData('');
    setRg('');
    setCpf('');
    setNis('');
    setGenero('');
    setEndereco('');
    setCargo('');
  };

  return (
    <div className="bg-Custom">
      <Container className="mt-5 d-flex align-items-center w-100" style={{ width: '60rem' }}>
        <img
          src="https://i.imgur.com/TrLvVCq.png"
          alt="Logo"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0, // Coloca a logo na frente do background
            width: '40rem', // Ajuste o tamanho da logo conforme necessário
          }}
        />
        <Card className='bg-transparent border-0 mx-2 w-100'>
          <Card.Header className='text-center customColor grayBackground rounded'>
            <h2>Cadastro de Funcionários</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicNome">
                    <Form.Label className="colorLabel">Nome Completo:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicRg">
                    <Form.Label className="colorLabel">RG:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="RG"
                      value={rg}
                      onChange={(e) => setRg(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicCpf">
                    <Form.Label className="colorLabel">CPF:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="CPF"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicNis">
                    <Form.Label className="colorLabel">NIS:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="NIS"
                      value={nis}
                      onChange={(e) => setNis(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formBasicData">
                    <Form.Label className="colorLabel">Data de Nascimento:</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Data de Nascimento"
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicGenero">
                    <Form.Label className="colorLabel">Gênero:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Gênero"
                      value={genero}
                      onChange={(e) => setGenero(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEndereco">
                    <Form.Label className="colorLabel">Endereço:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Endereço"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicCargo">
                    <Form.Label className="colorLabel">Cargo:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cargo"
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}
                      className='my-2'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Button className="d-block mx-auto mt-2" variant="primary" type="submit">
                    Cadastrar
                  </Button>
                </Col>
                <Col md={6} className="mb-3">
                  <Button className="d-block mx-auto mt-2 colorLabel" variant="secondary" type="button">
                    Cancelar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CadFuncionario;
