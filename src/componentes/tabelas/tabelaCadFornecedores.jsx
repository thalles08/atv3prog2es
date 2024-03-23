import { Button, Table } from "react-bootstrap";

export default function TabelaCadFornecedores(props) {
    return (
      <div>
        <Button onClick={()=>{
          props.setExibirTabela(false);
        }}>Cadastrar novo Fornecedor</Button>
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>CNPJ</th>
              <th>Razão Social</th>
              <th>Nome Fantasia</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Nome representante</th>
              <th>Telefone representante</th>
              <th>E-mail representante</th>
            </tr>
          </thead>
          <tbody>
            {
                props.listaFornecedores?.map((fornecedor, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{fornecedor.cnpj}</td>
                            <td>{fornecedor.razaoSocial}</td>
                            <td>{fornecedor.nomeFantasia}</td>
                            <td>{fornecedor.endereco}</td>
                            <td>{fornecedor.telefone}</td>
                            <td>{fornecedor.email}</td>
                            <td>{fornecedor.nomeRepresentante}</td>
                            <td>{fornecedor.telefoneRepresentante}</td>
                            <td>{fornecedor.emailRepresentante}</td>
                        </tr>
                    );
                })
            }        
          </tbody>
        </Table>
      </div>  
    );
}