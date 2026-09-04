import {useEffect,  useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import './Paginas.css'
import CardProduto from '../components/CardProduto';

function CerealKiller() {
    const[imagem, setImagem] = useState({
        nome: 'foto-cereal-killer',
        url: "https://raw.githubusercontent.com/rafaellindemann/balaio/refs/heads/main/exercicioverso/food-park/cerealKiller.png"
    });

    const[produtos, setProdutos] = useState([])


        const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    const cadastrarProduto = async () => {
        try {
            const prouto = {
                nome: "produto teste",
                preco: 404,
                estabelecimento: "Cereal"
            };
            const response = await axios.post('http://localhost:3000/produtos', prouto);
            if (response.status === 201) {
                fetchProdutos();
                // limparForm();
            }
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    };

        const salvarProduto = async () => {
        try {
            const produto = {
                nome: "salmao matador",
                preco: 6767,
                estabelecimento: "Cereal"
            };
            const response = await axios.put(`http://localhost:3000/produtos/10`, produto);
            // const response = await axios.put(`http://localhost:3000/clientes/${clienteSelecionado.id}`, cliente);
            if (response.status === 200) {
                fetchProdutos();
                // setClienteSelecionado(null);
                // limparForm();
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    };

    const deletarProduto = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/produtos/10`);
            if (response.status === 200) {
                fetchProdutos();
            }
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    };



    useEffect(() => {
      fetchProdutos()
      console.log(produtos)
    }, [])

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


        <p>
          Produtos no cardápio:
          {produtos.map((p)=> (
            <CardProduto key={p.id} p={p}/>
          ))}
        </p>
        <button onClick={cadastrarProduto}>Cadastrar Teste</button>
        <button onClick={salvarProduto}>Atualizar produto</button>
        <button onClick={deletarProduto}>Deletar produto</button>

        

    </div>
  )
}

export default CerealKiller