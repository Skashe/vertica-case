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
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s box-shadow 0.2s',
                '&:hover': {
                    boxShadow: 6,
                },
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

            <CardContent
                sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                }}
            >
                <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
                >
                {product.category}
                </Typography>

                <Typography
                variant="h6"
                sx={{
                    mb: 2,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                }}
                >
                {product.title}
                </Typography>

                <Typography
                variant="h6"
                sx={{ mt: 'auto' }}
                >
                ${product.price.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductCard