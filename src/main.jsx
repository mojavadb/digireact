import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
استفاده از آیکون های فونت آسم پس از نصب پکیج ها:
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const element = <FontAwesomeIcon icon="fa-solid fa-house" />

ReactDOM.render(element, document.body)
*/