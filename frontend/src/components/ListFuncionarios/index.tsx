import Table from 'react-bootstrap/Table';

function DarkExample() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Matrícula</th>
          <th>Setor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Gabriel</td>
          <td>Técnico</td>
          <td>123456</td>
          <td>Manutenção</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Igor</td>
          <td>Garoto de programa</td>
          <td>242424</td>
          <td>Dev</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Airton</td>
          <td>Supervisor</td>
          <td>123456</td>
          <td>Monitoramento</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DarkExample;