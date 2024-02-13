import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './style.css'; 


function VerticalExample() {
  return (
    <div className='vertical-container w-25' id='div-options'>
      <div className="button-group-container d-flex h-100">
        <ButtonGroup vertical className="full-height w-100">
          <Button><h3>Dashboard</h3></Button>
          <Button><h3>Funcionários</h3></Button>
          <Button><h3>Cadastrar</h3></Button>
          <Button><h3>Horarios</h3></Button>
          <Button><h3>Impressões</h3></Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default VerticalExample;
