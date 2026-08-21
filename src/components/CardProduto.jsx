//rfce
import { useContext } from 'react'
import './CardProduto.css'
import { GlobalContext } from '../contexts/GlobalContext'
function CardProduto({p}) {
      const {adicionarAoCarrinho} = useContext(GlobalContext)

  return (
    <div className="cont-cardproduto">
        <h3>{p.nome}</h3>
        <p>R${p.preco.toFixed(2).replace('.',',')}</p>
        <button onClick={() => adicionarAoCarrinho(p.id, "taverna")}>
            {/* ➕🛒 */}
            <img src="./solar--cart-plus-linear.svg" alt="" />
        </button>
    </div>
  )
}

export default CardProduto