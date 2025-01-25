import { useState } from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Emails from '../components/Emails.jsx';
const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    // function to open the drawer
    const toggelDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    return (
        
           <div>
            <Header toggelDrawer={toggelDrawer}/>
            <SideBar openDrawer={openDrawer}/>
            <Emails openDrawer={openDrawer} />
           </div>
        
    )
}

export default Main;