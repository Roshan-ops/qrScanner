import React, { useState} from 'react'
import { Container } from '@mui/system';
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import QRCode from 'qrcode';
import QrReader from 'react-qr-scanner';
import './App.css';

function App() {
  const[text, setText]= useState('');
  const[imageUrl, setImageUrl] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');
 

  const generateqrcode = async ()=>{
    try{
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
      

    }
    catch(error){
      console.log(error);
    }
  }
  
  const handleErrorWebCam =(error) => {
    console.log(error);
  }

  
  const handleScanWebCam = (result) =>{
    if(result) {
      setScanResultWebCam (result?.text);

    }
  }
  
  return (
    <Container className='container'>
      <Card>
        <h2 className='title'> Generate Download $ Scan QR Code with React js hello sathi </h2>
        <h5> Im roshan Pokhrel</h5>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item  md={6} sm={12} xs={12}>
              <TextField label='Enter your Text' onChange={(e) => setText(e.target.value)}></TextField>
              <Button style={{marginLeft:10,marginTop:10}} variant="contained" color="primary" onClick={()=> generateqrcode()}>Generate</Button>
              <br />
               {imageUrl ?
               (<a href= {imageUrl} download> <img src={imageUrl} alt="img"/> </a>) : null}

            </Grid>
           
            <Grid item  md={6} sm={12} xs={12}>
            
            <h3>Qr Code scan by web cam</h3>
            <QrReader className='QrReader' 
              
              delay={300} 
              onError={handleErrorWebCam} 
              onScan={handleScanWebCam} />
              <h3>  <a href={scanResultWebCam}>{scanResultWebCam}</a> </h3>
              
            </Grid>

          </Grid>

        </CardContent>

      </Card>

    </Container>

   );
}




export default App;
