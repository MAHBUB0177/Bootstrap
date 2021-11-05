
import React from 'react';
import { Card,Button, } from 'react-bootstrap';

const News = (props) => {
 console.log(props)
 const {title,author,description,urlToImage}=props.data

 

 return (
  <div>

  <Card style={{width:'850px'}}>
  <Card.Header> Author:{author}</Card.Header>
  <Card.Img  style={{width:'100%',height:'400px'}} variant="top" src={urlToImage} />
  <Card.Body>
    <Card.Title> Title:{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary" onClick={()=> props.handelPerson(props.data)}>Go somewhere</Button>
  </Card.Body>
</Card>

<div style={{width:'850px'}}>
<button type="button" class="btn btn-primary">Primary</button>
<Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
<Button variant="secondary" href="https://mui.com/getting-started/installation/">Secondary</Button>{' '}
<Button variant="success">Success</Button>{' '}
{/* <>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</> */}
</div>
    
  
  </div>
 );
};

export default News;