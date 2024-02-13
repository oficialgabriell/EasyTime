import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function ListFuncionarios(props: any) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lista de Funcionários
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              Funcionário 1
            </Col>
            <Col xs={12} md={8}>
              Funcionário 2
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={8}>
              Fincionário 3
            </Col>
            <Col xs={12} md={8}>
              Funcionário 4
            </Col>
            <Col xs={12} md={8}>
              Funcionário 5
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Sair</Button>
        <Button onClick={props.onClick}>Baixar lista</Button>
      </Modal.Footer>
    </Modal>
  );
  }
export default ListFuncionarios;