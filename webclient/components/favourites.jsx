import React from 'react';
import { Card } from 'semantic-ui-react';
import DisplayFavComponent from './sample/displayFavourites.jsx';

class Favourites extends React.Component{
  constructor(){
    super();
    this.state = {json:[]};
  }
  componentWillMount(){
    $.ajax({
       url:'/restaurants/view',
       type:'GET',
      success: function(data){
        console.log('Successfully got JSON' + data);
        this.setState({json:data.restaurant});
      }.bind(this),
      error: function(err){
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
  }
  render(){
    return (
      <div>
        <DisplayFavComponent page='favourites' json={this.state.json} />
      </div>
    );
  }
}
module.exports = Favourites;
