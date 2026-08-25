import { CssBaseline} from '@mui/material'
import { Route, Routes } from 'react-router'
import ProductListPage from './pages/ProductListPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import AppLayout from './components/AppLayout'

function App() {
  return (
    <>
      <CssBaseline />

      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
