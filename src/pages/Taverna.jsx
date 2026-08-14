import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'
import './Paginas.css'

function Taverna() {
  const {carrinho, setCarrinho} = useContext(GlobalContext)
  return (
    <div className='cont-taverna'>
        <Navbar />
        <h1>Taverna Periódica</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, vero veritatis! Asperiores illo incidunt quia modi saepe natus a at? Reprehenderit quam libero fugiat nobis vel fuga perspiciatis quis dicta?</p>
        <img className='img-taverna' src="./taberna-periodica.png" alt="" />
        <h2>Carrinho de teste, só teste.</h2>
        <p>Testi testa teste de testes</p>
        <p>{carrinho[0].nome}</p>
    </div>
  )
}

export default Taverna