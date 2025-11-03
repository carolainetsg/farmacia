import { Link } from "react-router-dom";
/*import {useContext} from "react";*/
import { useNavigate } from "react-router-dom";
/*import { AuthContext } from "../../contexts/AuthContext";*/

function Navbar() {

    const navigate = useNavigate();

    /*const {handleLogout}= useContext (AuthContext)

    function logout(){

        handleLogout()
        alert ('O Usuário foi desconectado com sucesso!')
        navigate ('/')
    }*/


    return (
        <>
        <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
            <div className="container flex justify-between text-lg mx-8">
                <Link to='/home' className="text-2xl font-bold">FarmCarol</Link>
                <div className= "flex gap-4">
                    Produtos
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>
                    Perfil
                    Login
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar