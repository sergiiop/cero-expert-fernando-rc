import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import './index.css'
import { SimpleForm } from './useEffect/SimpleForm'
import { SimpleFormWithHooks } from './useEffect/SimpleFormWithHook'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp'
// import { CounterWithCustomHooks } from './useState/CounterWithCustomHooks'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>
)
