import React from 'react';
import Restaurant from './restaurant.jsx';
import { Card } from 'semantic-ui-react';

class DisplayFavComponent  extends React.Component{

  constructor(){
    super();
  }
  render(){

    var divStyle = {
      margin: 70
    };
    var page = this.props.page;
    var JsonArray = this.props.json.map(function(item){
      if(page == 'favourites'){
        return <Restaurant name={item.name}
           img={item.img} 
           address={item.address}
           cuisines={item.cuisines}
           rating={item.rating}
           page= 'favourites'/>
      }

    });
    return (
        <div style={divStyle}><Card.Group>{JsonArray}</Card.Group></div>
    );
  }
}

module.exports = DisplayFavComponent;
