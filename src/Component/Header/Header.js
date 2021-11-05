import React from 'react';
import {Button,Jumbotron} from 'reactstrap'
import './header.css'

const Header = () => {
 return (
  <div>
  
  <Jumbotron>
         {/* <h2 className='text-primary'> mahbub</h2> */}
        <h1 className="text-primary" style={{textAlign:'center'}}>Welcome to my site....</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          {/* <Button color="primary">Learn More</Button> */}
          <a class="btn btn-primary" href="https://react-bootstrap.github.io/" role="button">Learn More..</a>
        </p>
      </Jumbotron>

  </div>

 );
};

export default Header;