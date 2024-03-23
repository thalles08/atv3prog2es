import { Button, Table } from "react-bootstrap";

export default function TabelaCadProdutos(props) {
    return (
      <div>
        <Button onClick={()=>{
          props.setExibirTabela(false);
        }}>Cadastrar novo Produto</Button>
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Código</th>
              <th>Descrição</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Categoria</th>
              <th>Preço de custo</th>
              <th>Preço de venda</th>
              <th>Fornecedor</th>
            </tr>
          </thead>
          <tbody>
            {
                props.listaProdutos?.map((produto, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{produto.codigoProduto}</td>
                            <td>{produto.descricaoProduto}</td>
                            <td>{produto.marcaProduto}</td>
                            <td>{produto.modeloProduto}</td>
                            <td>{produto.categoriaProduto}</td>
                            <td>{produto.precoCusto}</td>
                            <td>{produto.precoVenda}</td>
                            <td>{produto.fornecedor}</td> 
                        </tr>
                    );
                })
            }        
          </tbody>
        </Table>
      </div>  
    );
}