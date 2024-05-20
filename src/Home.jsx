import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { FiInstagram, FiTwitter , FiFacebook} from 'react-icons/fi';
import Image1 from '../public/image1.png';
import Image2 from '../public/image2.png';
import Image3 from '../public/imagee3.png';
import Image4 from '../public/imagee4.png';




const Home = () => {
  return (
    <Container className='cont'>
    <br></br><br></br> 
    <Row >
    <Col justify-content-center className='txt'>
    
      <h5 style={{color: 'orange'}}> THE ENTOURAGE</h5>
      <h1 style={{color: 'white', fontSize: '35px'}}> <strong>It is everything, and  it won't change</strong></h1>
      <p style={{color:'gray'}}> It depends on your friends and companions, it depends on who goes out with you, if <br></br> they have money, if you have money.</p>


      </Col>
</Row>

<br></br><br></br>

<Row>

  <Col className='cards1'>

{/* card section */}

   <img src={Image1} alt=''style={{height:'100px', width:'100px', borderRadius: '50px'}} />
   <br></br><br></br>
    <h2 style={{color: 'white', fontSize:'20px'}}> Ryan Tompson</h2>
    <p style={{color:'gray', fontSize: '12px'}}> WEB DEVELOPER </p>
    <p><FiTwitter className='twitter'/> <FiFacebook className='facebook'/> <FiInstagram className='instagram'/> </p>

  </Col>

  <Col className='cards1'>

<img src={Image2} alt=""style={{height:'100px', width:'100px', borderRadius: '50px'}} /> 
<br></br><br></br>
<h2 style={{color: 'white', fontSize:'20px'}}> Romina Hadid</h2>
<p style={{color:'gray',fontSize: '12px'}}>MARKETING SPECIALIST</p>
<p> <FiInstagram className='instagram'/>  <FiFacebook className='facebook'/> </p>

</Col>

 <Col className='cards1'>

<img src={Image3} alt=""style={{height:'100px', width:'100px', borderRadius: '50px'}} />
<br></br><br></br>
<h2 style={{color: 'white', fontSize:'20px'}}> Alexa Smith</h2>
<p style={{color:'gray', fontSize: '12px'}}> UI/UX DESIGNER </p>
<p><FiInstagram className='instagram'/> <FiTwitter className='twitter'/> <FiFacebook className='facebook'/>  </p>

</Col>

 <Col className='cards1'>

<img src={Image4} alt=""style={{height:'100px', width:'100px', borderRadius: '50px'}} />
<br></br><br></br>
<h2 style={{color: 'white',  fontSize:'20px'}}> Jenna Kardi</h2>
<p style={{color:'gray', fontSize: '12px'}}> FOUNDER AND CEO </p>
<p><FiTwitter className='twitter'/> <FiFacebook className='facebook'/> <FiInstagram className='instagram'/> </p>


</Col>
</Row>
      </Container>    


  )
}

export default Home