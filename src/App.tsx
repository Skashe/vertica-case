import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import { Route, Routes } from 'react-router'
import ProductListPage from './pages/ProductListPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {
  

  return (
    <>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Vertica Store - Johan
            </Typography>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
