import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import { API_URLS } from '../services/api.urls';
import useApi from '../hooks/useApi'
import {Checkbox,Box,List,ListItem} from '@mui/material';
import {DeleteOutline, Padding } from '@mui/icons-material';
import Email from './Email';



const Emails = ({openDrawer}) => {
    
    const [selectedEmails,setSelectedEmails] = useState([]);
    const [refreshScreen , setRefreshScreen]  =useState(false);
    const {type} = useParams();

    const getEmailService= useApi(API_URLS.getEmailFromType);

    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
    useEffect(() =>{
        getEmailService.call({},type);
    },[type,refreshScreen]);

    const selecAllEmails = (e)=>{
        if(e.target.checked){
            const emails = getEmailService?.response?.map(email => email._id);
            setSelectedEmails(emails);
        }else{
            setSelectedEmails([]);
        }
    }
    const deleteSelectedEmails = (e) =>{
        if(type==='bin'){

        }else{
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prevState => !prevState)
    }
    return (
        <Box style= {openDrawer ? {marginLeft:250, width:'calc(100%-250px)'} : {width:'100%'}}> 
        <Box style={{Padding:'20px 10px 0px 10px',display:'flex',alignItems:'center'}}>
            <Checkbox size="small" onChange={(e)=>selecAllEmails(e)}/>
            <DeleteOutline onClick={(e)=>deleteSelectedEmails()}/>
        </Box>
        <List>
            {
                getEmailService?.response?.map(email =>(
                    <Email
                    key={email._id}
                    email={email}
                    selectedEmails={selectedEmails}
                    />
                ))
            }
        </List>
        </Box>
    )
}

export default Emails;