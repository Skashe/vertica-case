import {
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material'
import { Outlet } from 'react-router'

function AppLayout() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Vertica Store - Johan
                    </Typography>
                </Toolbar>
            </AppBar>

            <Outlet />
        </Box>
    )
}

export default AppLayout