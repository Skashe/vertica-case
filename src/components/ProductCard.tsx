import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { Link } from 'react-router'
import type { Product } from '../types/product'

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <Card
            component={Link}
            to={`/products/${product.id}`}
            sx={{
                height: '100%',
                textDecoration: 'none',
            }}
        >
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
                sx={{
                    height: 240,
                    objectFit: 'contain',
                    p: 2,
                }}
            />

            <CardContent>
                <Typography variant='h6'>
                    {product.title}
                </Typography>

                <Typography variant='body2' color='text.secondary'>
                    {product.category}
                </Typography>

                <Typography variant='h6' sx={{ mt: 2}}>
                    ${product.price.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductCard