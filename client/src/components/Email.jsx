import {Box ,Typography,Checkbox ,styled} from '@mui/material';
import {Star , StarBorder} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes/routes';
const Wrapper = styled(Box)({
    padding:'0 0 0 10px',
    background:'#f2f6fc',
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
    '& > div':{
        display:'flex',
        width:'100%',
        '&>p':{
            fontSize:14,
        }
    }
})
const Date= styled(Typography)({
    marginLeft:'auto',
    marginRight:20,
    fontSize:12,
    color:'#5f6368',
})

const Indicator = styled(Typography)({
    fontSize:'12px !important',
    background:'#ddd',
    color:'#222',
    padding:'0 4px',
    borderRadius:4,
    marginRight:6,

})
const Email = ({email,selectedEmails}) => {

    const navigate =useNavigate();
    return(

       <Wrapper>
        <Checkbox 
        checked={
            selectedEmails.includes(email._id)}
            size='small'
        />
        <StarBorder fontSize='small' style={{marginRight:10}}/>
        <Box onClick={()=>navigate(routes.view.path,{state:{email:email}})}>
            <Typography style={{width:'200px',overflow:'hidden'}}>{email.name}</Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email.subject} {email.body&&'-'}{email.body}</Typography>
            <Date>
                {(new window.Date(email.date)).getDate()}
                {(new window.Date(email.date)).toLocaleString('default',{month:'long'})}

            </Date>
       </Box>
       </Wrapper>

    )
}

export default Email;