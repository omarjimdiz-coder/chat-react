import { Route, Routes } from "react-router-dom"
import { Login } from "./components/Login"
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
      </Routes>
    </>
  )
}

export default App
