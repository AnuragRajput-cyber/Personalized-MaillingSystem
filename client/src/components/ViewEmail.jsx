import { Box } from "@mui/material"
import { useOutletContext } from "react-router-dom";
const ViewEmail = () =>{
    const { openDrawer } = useOutletContext();
    return (
        // <Box style={openDrawer ? { marginLeft: 250, width: '100%' ,border:'2px solid black'} : { width: '100%' } }>
        //     <h1>helloooooo</h1>
        // </Box>
        <h1>hello</h1>
        
    )
}
export default ViewEmail;