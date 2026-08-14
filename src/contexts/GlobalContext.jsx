import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto
    const[usuario, setUsuario] = useState("Dona Bete")
    let pontos = 1234
    const[carrinho, setCarrinho] = useState([
        {
            nome: 'Nescau batizado com açucar',
            quantidade: 1,
            preco: 10
        }
    ])

    return(
        <GlobalContext.Provider value={{
                usuario, setUsuario, pontos, carrinho, setCarrinho
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
