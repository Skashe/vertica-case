import {useEffect, useState} from 'react'
import { CircularProgress, Container, Grid, Typography } from '@mui/material'
import type { Product } from '../types/product'
import { getProducts } from '../api/products'
import ProductCard from '../components/ProductCard'

function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
        // Maybe use react-query??
      const fetchProducts = async () => {
        try {
          const products = await getProducts()
          setProducts(products)
        } catch (error) {
          if (error instanceof Error) {
          setError(error.message)
          } else {
            setError('An unknown error occurred.')
          }
        } finally {
          setLoading(false)
        }
      }
  
      fetchProducts()
    }, [])

    return (
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
              <Grid
                key={product.id}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <ProductCard product={product} />
          </Grid>
        ))}
        </Grid>
        )}
      </Container>
    )
}

export default ProductListPage
