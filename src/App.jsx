import { Route, Routes } from "react-router-dom"
import { Chat } from "./components/Chat"
import { Login } from "./components/Login"
import { ChatsProvider } from "./context/ChatsContext"
import { LoginProvider } from "./context/LoginContext"

function App() {

  return (
    <>
      <Routes>
          <Route 
            path='/' 
            element={ 
              <LoginProvider>
                <Login /> 
              </LoginProvider>
            }
          />
          <Route 
            path="chat" 
            element={ 
              <ChatsProvider>
                <Chat /> 
              </ChatsProvider>
            } 
          />
      </Routes>
    </>
  )
}

export default App
