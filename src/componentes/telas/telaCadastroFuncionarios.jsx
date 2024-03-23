import FormCadFuncionarios from "../formularios/formCadFuncionarios";
import TabelaCadFuncionarios from "../tabelas/tabelaCadFuncionarios";
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function TelaCadastroFuncionarios(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);

    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h4 className="mt-5">Cadastro de Funcionários</h4>
                    <h5 className="mt-5">Lista de Funcionários</h5>
                    <div className="mt-3">
                        <TabelaCadFuncionarios 
                            listaFuncionarios={listaFuncionarios} 
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
                    <h4 className="mt-5">Cadastro de Funcionários</h4>
                    <h5 className="mt-5">Formulário de cadastro de Funcionários</h5>
                    <div className="mt-3">
                        <FormCadFuncionarios 
                            setExibirTabela={setExibirTabela}
                            listaFuncionarios={listaFuncionarios}
                            setListaFuncionarios={setListaFuncionarios}
                        />
                    </div>
                </Pagina>
            </div>
        )
    }
}