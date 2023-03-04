import './App.css'
import IndexPage from './pages/IndexPage'
import {Route,Routes} from 'react-router-dom'
import Layout from '../Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <Routes>
       <Route path='/' element={<Layout/>}>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/index' element={<IndexPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
       </Route>
    </Routes>
  )
}

export default App
