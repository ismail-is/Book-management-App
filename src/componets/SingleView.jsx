import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Scrollbars from 'react-custom-scrollbars-2';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:400,
  bgcolor: '#E8DAEF',
  border: '4px solid  #7D3C98',
  boxShadow: 24,
  p: 4,
};
export default function SingleView({send,close}) {
  

  return (
   
    <div >
      
      
    <Card sx={style}>
    <Scrollbars style={{width:330,height:300,marginTop:"5%"}}>
      <CardMedia
        sx={{ height: 200 }}
        image={send.Url}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          <h1>Book Name :- {send.BookName}</h1>
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary">
          <table>
            <tr>
            <th>AuthorName : -{send.AuthorName}</th>
            </tr>
            <hr />
            <tr>
            <th>Description : -{send.Discription}</th>
            </tr>
            <hr />
            <tr>
            <th>Date:{send.Date}</th>
            </tr>
           
            <tr>
            <th>Language:{send.Lan}</th>
            </tr>
          </table>
        </Typography>
      </CardContent>
   
      <CardActions>
        <Button onClick={close} color='warning'  variant="outlined">Close</Button>
      </CardActions>
      </Scrollbars>
    </Card>
   
    </div>
   
  );
}