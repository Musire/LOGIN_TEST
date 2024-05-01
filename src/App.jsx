import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Signup, ForgotPassword, ResetPassword, Home, NotFound, VerifyEmail } from "@/pages"
import { Main } from "@/layouts"
import { CentralProvider } from './contexts/CentralContext'

const App = () => {
  return (
    <CentralProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/verify-email' element={<VerifyEmail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </CentralProvider>
  )
}

export default App