
import { AppBar, Toolbar,styled ,InputBase,Box} from '@mui/material';
import {Menu as MenuIcon,SearchOutlined,Tune,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
import {mailLogo} from '../constant/contant';
const StyledAppBar = styled(AppBar)({
    background: 'linear-gradient(90deg, rgba(9,27,40,1) 28%, rgba(20,150,233,1) 55%, rgba(0,142,255,1) 100%)',
    boxShadow:'none'
});


// styling for SearchBox in the header
const SerachWrapper = styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 20px',
    '& > div':{
        width:'100%',
        padding:'0 10px'
    }
});


// styling for header left options
const OptionWrapper = styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:20
    }
})

//Header
const Header =({toggelDrawer}) =>{
    return (
        <StyledAppBar position=' static'>
            <Toolbar>
                <MenuIcon onClick={toggelDrawer}/>
                <img src={mailLogo} alt="EasyMail LOGO" style={{width : 110,marginLeft:15}}/>
                <SerachWrapper>
                    <SearchOutlined color="action"/>
                    <InputBase/>
                    <Tune color="action"/>
                </SerachWrapper>
                <OptionWrapper>
                    <HelpOutlineOutlined color='action'/>
                    <SettingsOutlined color='action'/>
                    <AppsOutlined color='action'/>
                    <AccountCircleOutlined color='action'/>
                </OptionWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}
export default Header;