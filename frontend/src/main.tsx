import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { UserProvider } from './context/userContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
    domain='dev-4yvdljdio7nwryeo.us.auth0.com'
    clientId='Ifn5MmrpGjiulof5tW9w81TVsvmDBTZd'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserProvider>
      <App />
    </UserProvider>
  </Auth0Provider>
)
