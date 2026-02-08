import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'
import '@/i18next.js';

// TODO вместо <div>Loading translations...</div> добавить страницу отображаемую до загрузки 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Suspense fallback={<div>Loading translations...</div>}>  */}
      <App /> 
   {/*  </Suspense> */}
  </StrictMode>,
)
