import React from 'react';
import {useState} from 'react';
import { Dialog, Box, Typography, styled, InputBase, TextField, Button}  from '@mui/material';
import {borderBottom, Close,DeleteOutlined} from '@mui/icons-material'; 
import { API_URLS} from '../services/api.urls';
import useApi from '../hooks/useApi';

const DialogStyle={
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0 ',
};
const Header = styled(Box)({
    border:'none',
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background: 'linear-gradient(90deg, rgba(9,27,40,1) 28%, rgba(20,150,233,1) 55%, rgba(0,142,255,1) 100%)',
    '& > p':{
        color:'white',
        fontSize:'14px',
        fontWeight:500,
    }
});
const RecipientsWrapper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding:'0 15px',
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid #f5f5f5',
        marginTop:10,
    }
});
const Footer = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center',
});
const SendButton =styled(Button)({
    background:'rgba(9,27,40,1)',
    borderRadius:18,
    width:100,
    color:'white',
    fontWeight:500,
    textTransform:'none',
})
const ComposeMail = ({openDialog,setOpenDialog}) => {
    const sentEmailService  = useApi(API_URLS.saveSentEmails);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);
    const [data, setData] = useState({}) ;
    const config = {
        Host : "smtp.elasticemail.com",
        Username : process.env.REACT_APP_USERNAME,
        Password : process.env.REACT_APP_PASSWORD,
        port:2525,
    }
    const closeComposeMail = (e) =>{
        e.preventDefault();
        const payload = {
            to:data.to,
            from:"andrenotech123@gmail.com",
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:'',
            name:'Anurag',
            starred:false,
            type:'drafts',
        }
        saveDraftService.call(payload);



//closing the dialoge if not getting any error.
if(!saveDraftService.error){
    setOpenDialog(false);


    //setting data empty for the upcoming mails
    setData({});
}else{
    
}
    };
    const onValueChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
    console.log(data)
};
    const sendMail = (e) =>{
        e.preventDefault();
        if(window.Email){
            window.Email.send({
                ...config,
                to : data.to,
                From : "andrenotech123@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
            message => alert(message)
            );
        }
        const payload = {
            to:data.to,
            from:"andrenotech123@gmail.com",
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:'',
            name:'Anurag',
            starred:false,
            type:'sent',
        }
        sentEmailService.call(payload);



//closing the dialoge if not getting any error.
if(!sentEmailService.error){
    setOpenDialog(false);


    //setting data empty for the upcoming mails
    setData({});
}else{
    
}


        setOpenDialog(false);
    }
    return (
        <Dialog
        open={openDialog}
       PaperProps={
        {sx:DialogStyle}}
        >
            <Header>
                <Typography>New Message</Typography>
                 <Close fontSize='small' onClick={(e) => closeComposeMail(e)}/>
            </Header>
            <RecipientsWrapper>
            <InputBase placeholder="Recipients" name="to" onChange={(e) => onValueChange(e)}/>
            <InputBase placeholder="Subject" name="subject" onChange={(e) => onValueChange(e)}/>
            </RecipientsWrapper>
            <TextField 
        multiline
        rows={20}
        sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}
        onChange={(e) => onValueChange(e)}
        name='body'
        />
        <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutlined onClick={(e) => setOpenDialog(false)}/>
        </Footer>
        </Dialog>
    )
}
export default ComposeMail;