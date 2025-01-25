
import { Drawer ,styled } from "@mui/material";
import SideBarContent from "./SideBarContent";
const SideBar = ({openDrawer}) =>{
    return (
        <Drawer
        anchor='left' 
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted:true
        }}
        variant="persistent"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop:'64px',
                width:250,
                // background: 'rgba(9,27,40,1)',
                background: 'linear-gradient(90deg, rgba(16,19,32,1) 0%, rgba(0,0,0,1) 52%, rgba(0,60,103,1) 100%, rgba(0,100,172,1) 100%);',
                borderRight:'none',
                height:'calc(100vh-64px)'
            }
        }}
        >
            <SideBarContent/>

        </Drawer>
    )
}
export default SideBar;