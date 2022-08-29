import { useSelector } from 'react-redux'
import Login from './pages/Login'
import RoomsOverviews from './pages/RoomsOverviews'

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  
  if(!isLoggedIn)
    return <Login />;

  return <RoomsOverviews />;
}

export default App;