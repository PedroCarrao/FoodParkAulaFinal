import { useState } from 'react'
import Navbar from '../components/Navbar'
import './Paginas.css'

function CerealKiller() {
    const[imagem, setImagem] = useState({
        nome: 'foto-cereal-killer',
        url: "https://raw.githubusercontent.com/rafaellindemann/balaio/refs/heads/main/exercicioverso/food-park/cerealKiller.png"
    });
  return (
    <div className='cont-cereal'>
        <Navbar />
        <h1>Cereal Killer Cereal Bar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quam, omnis velit doloribus ipsam quidem accusamus perspiciatis laudantium id suscipit quas porro, ullam nam deserunt consequatur nemo! Harum, nostrum fugit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias, molestiae provident id necessitatibus repellat? Laborum eum deserunt ad numquam labore unde. Soluta, vero possimus? Quas tempore eligendi voluptatum nam?</p>
        <img className='img-cereal' src={imagem.url} alt="" />
        <button onClick={() => setImagem({
            nome: 'foto-cereal-killer',
            url: "https://github.com/rafaellindemann/balaio/blob/main/exercicioverso/food-park/killer.jpg?raw=true"
        })}>Surpresa</button>
    </div>
  )
}

export default CerealKiller