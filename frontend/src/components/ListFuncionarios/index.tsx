import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './style.scss';
interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  matricula: string;
  setor: string;
}

const FuncionarioItem: React.FC<{ funcionario: Funcionario; onDelete: (id: number) => void; onEdit: (id: number) => void }> = ({
  funcionario,
  onDelete,
  onEdit,
}) => {
  return (
    <tr>
      <td>{funcionario.id}</td>
      <td>{funcionario.nome}</td>
      <td>{funcionario.cargo}</td>
      <td>{funcionario.matricula}</td>
      <td>{funcionario.setor}</td>
      <td>
        <button onClick={() => onDelete(funcionario.id)}>Excluir</button>
        <button onClick={() => onEdit(funcionario.id)}>Editar</button>
      </td>
    </tr>
  );
};

const ListFuncionarios: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([
    { id: 1, nome: 'Gabriel', cargo: 'Técnico', matricula: '123456', setor: 'Manutenção' },
    { id: 2, nome: 'Igor', cargo: 'Garoto de programa', matricula: '242424', setor: 'Dev' },
    { id: 3, nome: 'Airton', cargo: 'Supervisor', matricula: '123456', setor: 'Monitoramento' },
    { id: 4, nome: 'Larissa', cargo: 'Analista de Sistemas', matricula: '789012', setor: 'Desenvolvimento' },
    { id: 5, nome: 'Fernanda', cargo: 'Gerente de Projetos', matricula: '345678', setor: 'Projetos' },
    { id: 6, nome: 'Ricardo', cargo: 'Analista de QA', matricula: '901234', setor: 'Qualidade' },
    { id: 7, nome: 'Lucas', cargo: 'Designer', matricula: '567890', setor: 'Design' },
    { id: 8, nome: 'Camila', cargo: 'Analista de Marketing', matricula: '123789', setor: 'Marketing' },
    { id: 9, nome: 'Vinícius', cargo: 'Engenheiro de Software', matricula: '456123', setor: 'Desenvolvimento' },
    { id: 10, nome: 'Amanda', cargo: 'Analista Financeiro', matricula: '789456', setor: 'Financeiro' },
    { id: 11, nome: 'Fábio', cargo: 'Coordenador de Recursos Humanos', matricula: '234567', setor: 'RH' },
    { id: 12, nome: 'Isabela', cargo: 'Arquiteto de Soluções', matricula: '890123', setor: 'Arquitetura' },
    { id: 13, nome: 'Diego', cargo: 'Analista de Redes', matricula: '345012', setor: 'TI' },
    { id: 14, nome: 'Juliana', cargo: 'Especialista em UX', matricula: '678901', setor: 'Design' },
    { id: 15, nome: 'Roberto', cargo: 'Analista de Suporte', matricula: '210987', setor: 'TI' },
    { id: 16, nome: 'Carolina', cargo: 'Gerente de Marketing', matricula: '543210', setor: 'Marketing' },
    { id: 17, nome: 'Eduardo', cargo: 'Tecnico', matricula: '875783', setor: 'Operacional' },
    { id: 18, nome: 'Douglas', cargo: 'Tecnico', matricula: '571543', setor: 'Operacional' },
    { id: 19, nome: 'Erick', cargo: 'Tecnico', matricula: '870903', setor: 'Operacional' },
    { id: 20, nome: 'Franciso', cargo: 'Dono', matricula: '876000', setor: 'Admnistração' },

  ]);

  const handleDelete = (id: number) => {
    const updatedFuncionarios = funcionarios.filter((funcionario) => funcionario.id !== id);
    setFuncionarios(updatedFuncionarios);
  };

  const handleEdit = (id: number) => {

    console.log(`Editar funcionário com ID: ${id}`);
  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Matrícula</th>
            <th>Setor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
            <FuncionarioItem key={funcionario.id} funcionario={funcionario} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListFuncionarios;