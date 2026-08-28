import { useContext } from "react"
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"
import './Paginas.css'

function Carrinho() {
    const {carrinho} = useContext(GlobalContext)
  return (
    <div className='cont-carrinho'>
        <Navbar />
        <h1>Carrinho</h1>
        <p>Aqui vocês vão colocar os produtos do carrinho... :D</p>
        {carrinho.map((item) => (
            <div className="item-carrinho">
                <p>{item.produto.nome} 
                    | qtd: {item.quantidade} 
                    | R${item.produto.preco.toFixed(2)}
                </p>
                {console.log(item)}
            </div>
        ))}

        <p>Produtos no carrinho: {carrinho.length}</p>
    </div>
  )
}

export default Carrinho