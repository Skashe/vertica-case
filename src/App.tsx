import {useEffect, useState} from 'react'
import { AppBar, CircularProgress, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material'
import './App.css'
import type { Product } from './types/product'
import { getProducts } from './api/products'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts()
        setProducts(products)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

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

      <Container sx={{ py: 4 }}>
        <Typography variant="h4">Products</Typography>
        {loading && <CircularProgress />}
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
        {!loading && !error && (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard product={product} />
          </Grid>
        ))}
        </Grid>
        )}
      </Container>
    </>
  )
}

export default App
