import { Navigate } from 'react-router-dom';
import { useCentral } from "@/hooks"

const withAuth = (Component) => {

  const AuthRoute = ({ ...props }) => {
    const { authState } = useCentral()
    const isAuthenticated = authState.authentication

    return (
        <>
          {isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />}
        </>
      )
  }

  return AuthRoute

};

export default withAuth;
