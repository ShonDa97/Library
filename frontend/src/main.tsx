import ReactDOM from 'react-dom/client'
import App from './components/App'
import { UserProvider } from './context/userContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserProvider>
    <App />
  </UserProvider>
)
