import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'

import { AuthProvider } from './Context/AuthContext';

import { RoutesCustom } from './routes/RoutesCustom'
import { queryClient } from './services/queryClinte';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RoutesCustom />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
