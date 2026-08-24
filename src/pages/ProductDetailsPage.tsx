import { Container, Typography } from '@mui/material'
import { useParams } from 'react-router'

function ProductDetailsPage() {
    const { id } = useParams()

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4">
                Product Details
            </Typography>

            <Typography>
                Product ID: {id}
            </Typography>
        </Container>
    )
}

export default ProductDetailsPage