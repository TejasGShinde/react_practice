import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyCart } from './Context/MyCart.jsx'
import { store } from './Redux/store.js'
import {Provider} from"react-redux"
createRoot(document.getElementById('root')).render(
    <Provider store={store }>
    <MyCart>
    <App />
    </MyCart>
    </Provider>
)
