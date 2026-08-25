import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import { Link, useParams } from 'react-router'
import { getProductById } from '../api/products'
import type { Product } from '../types/product'

function ProductDetailsPage() {
  const { id } = useParams()

  const [product, setProduct] = React.useState<Product | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function loadProduct() {
      if (!id) {
        setError('Product ID is missing.')
        setLoading(false)
        return
      }

      try {
        const data = await getProductById(Number(id))
        setProduct(data)
      } catch {
        setError('Could not load product.')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  if (loading) {
    return (
      <Container sx={{ py: 4 }}>
        <CircularProgress />
      </Container>
    )
  }

  if (error || !product) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography color="error" gutterBottom>
          {error ?? 'Product not found.'}
        </Typography>

        <Button component={Link} to="/products">
          Back to products
        </Button>
      </Container>
    )
  }

  return (
    <Container sx={{ py: 4 }}>
      <Button component={Link} to="/products" sx={{ mb: 3 }}>
        ← Back to products
      </Button>

      <Card>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              width: { xs: '100%', md: 400 },
              height: 400,
              objectFit: 'contain',
              p: 4,
            }}
          />

          <CardContent sx={{ flex: 1, p: 4 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              {product.category}
            </Typography>

            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>

            <Typography variant="h5" sx={{ mb: 3 }}>
              ${product.price.toFixed(2)}
            </Typography>

            <Typography variant="body1">
              {product.description}
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </Container>
  )
}

export default ProductDetailsPage