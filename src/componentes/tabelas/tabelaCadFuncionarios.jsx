import { Button, Table } from "react-bootstrap";

export default function TabelaCadFuncionarios(props) {
    return (
      <div>
        <Button variant="secondary" onClick={()=>{
          props.setExibirTabela(false);
        }}>Cadastrar novo Funcionário</Button>
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>CPF</th>
              <th>Endereço completo</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
                props.listaFuncionarios?.map((funcionario, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.dataNascimento}</td>
                            <td>{funcionario.cpf}</td>
                            <td>{funcionario.endereco}</td>
                            <td>{funcionario.telefone}</td>
                            <td>{funcionario.email}</td>
                            <td><Button variant='danger'>Excluir</Button> {' '}
                                <Button variant='primary'>Alterar</Button></td>
                        </tr>
                    );
                })
            }        
          </tbody>
        </Table>
      </div>  
    );
}