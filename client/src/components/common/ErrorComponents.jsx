import {Box, Typography} from '@mui/material';
import { useRouteError } from 'react-router-dom';

const ErrorComponents = () =>{
    const error= useRouteError();
    console.log(error);
    return (
        <Box style={{marginLeft:250}}>
            <Typography>There was an error when connectiong</Typography>
        </Box>
    )
}
export default ErrorComponents;