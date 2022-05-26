import { Login } from './pages/login'
import { Routes, Route} from 'react-router-dom'
import { Signup } from './pages/signup'
import { Home } from './pages/home'
import { Authentication } from './context/Authentication'
import { PerfilUser } from './pages/profile-user'
import { UserPerfil } from './pages/profile-of-auth-user'
import { PerfilEvaluetion } from '../src/components/profile-user-container/PerfilEvaluetion'
import { FindJob } from './pages/findJob'


function App() {
  
  return(
    <Routes>
      <Route path='/' element={<Home /> }></Route>
      <Route path='/user/:id' element={<PerfilUser />} />

    
      <Route path='/perfil' element={
       <Authentication>
          <UserPerfil />
       </Authentication>
      }/>

      <Route path='/findJob/:job' element={ <FindJob />}></Route>
      <Route path='/login' element={<Login /> }></Route>
      <Route path='/signup' element={<Signup /> }></Route>

    </Routes>
  )

  
}

export default App
