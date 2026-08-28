import { createContext, useEffect, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {


// aqui cria as infos salvas no contexto
    const[usuario, setUsuario] = useState("Dona Bete")
    let pontos = 1234
    const[carrinho, setCarrinho] = useState([])
    const[cardapioTaverna, setCardapioTaverna] = useState([
        {
            id: 0,
            nome: 'Coca zero com mentos',
            preco: 25,
        },
        {
            id: 1,
            nome: 'Vinagre com limão',
            preco: 5,
        },
        {
            id: 2,
            nome: 'Pepsi Twist',
            preco: 3,
        },
    ])

    useEffect( () => {
        console.log(carrinho);
    } ,[carrinho])

    // forma mais comum de usar o useEffect, para buscar dados em uma api ao carregar a página
    // useEffect(() => {
    //     // get na api de dados
    // }, [])

    function adicionarAoCarrinho(id, restaurante){
        // console.log(carrinho);
        // console.log(id);
        
        if(restaurante == 'taverna'){
            let novoProduto = cardapioTaverna.find( p => p.id == id)
            console.log(novoProduto);

            setCarrinho([...carrinho, {
                produto: novoProduto,
                quantidade: 1,
                id: Date.now()
            }])  
        }

        console.log(carrinho);
        
    }


    return(
        <GlobalContext.Provider value={{
                usuario, setUsuario, pontos, carrinho, setCarrinho, cardapioTaverna, adicionarAoCarrinho
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
