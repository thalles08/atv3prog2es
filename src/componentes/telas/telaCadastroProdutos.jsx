import FormCadProdutos from "../formularios/formCadProdutos";
import TabelaCadProdutos from "../tabelas/tabelaCadProdutos";
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function TelaCadastroProdutos(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaProdutos, setListaProdutos] = useState([]);

    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h4 className="mt-5">Cadastro de Produtos</h4>
                    <h5 className="mt-5">Lista de Produtos</h5>
                    <div className="mt-3">
                        <TabelaCadProdutos 
                            listaProdutos={listaProdutos} 
                            setExibirTabela={setExibirTabela} />
                    </div>

                </Pagina>
            </div>
        )
    }
    else {
        return (
            <div>
                <Pagina>
                    <h4 className="mt-5">Cadastro de Produtos</h4>
                    <h5 className="mt-5">Formulário de cadastro de Produtos</h5>
                    <div className="mt-3">
                        <FormCadProdutos 
                            setExibirTabela={setExibirTabela}
                            listaProdutos={listaProdutos}
                            setListaProdutos={setListaProdutos}
                        />
                    </div>
                </Pagina>
            </div>
        )
    }
}