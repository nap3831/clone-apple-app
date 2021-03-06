import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {Card , CardImg, CardText,CardBody,CardTitle} from 'reactstrap';
export default class Product extends Component {
  render() {
    let {Title , Detail, Images,linkpage} = this.props;
    return (
      <div className="cardContent">
    < Link  to={linkpage} >
         <Card style={{height:'30%',width:'100%'}}>
        <CardImg style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}   src={Images} alt="Card image cap" >
        </CardImg>
        <CardBody>
          <CardTitle style={{paddingTop:'20%',color:'#000'}}>{Title}</CardTitle>
          <CardText></CardText>
          <CardText>
            <medium className="text-muted ">
            {Detail}
            </medium>
          </CardText>
        </CardBody>
      </Card>
      </ Link>
      
   
      </div>
    )
  }
}
