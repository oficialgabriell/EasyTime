import CadFuncionario from "../CadFuncionario";
import ListFuncionarios from "../ListFuncionarios";
import PainelLogin from "../Painel";

function MainApp() {
    return (
      <div className="MainApp">
        <div>
            <div className="PainelLogin">
                <PainelLogin/>
            </div>
            <div className="CadFincionario">
                <CadFuncionario/>
            </div>
            <div className="ListFuncionarios">
                <ListFuncionarios/>
            </div>
        </div>
      </div>
    )
}
export default MainApp;