import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import App from './App'
import './index.css'
import 'aos/dist/aos.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-PV4PLVNGQG");
ReactGA.send("pageview");
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)