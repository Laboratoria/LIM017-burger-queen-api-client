import {Route, useAuth, Redirect} from 'react-dom';

export function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  }
// export const PrivateRoute = ({ children })  =>{
//     const auth = useAuth();
//     return auth ? children : <Navigate to="/login" />;
//   }