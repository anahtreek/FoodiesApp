import React from 'react';
import { Card } from 'semantic-ui-react';
import DisplayFavComponent from './displayFavourites.jsx';

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

  trigger(id, img, name, address, cuisines, rating, page) {
    if(page === 'favourites') {
      $.ajax({
         url:'/restaurants/delete/'+id,
         type:'DELETE',
        success: function(msg){
          console.log('Successfully deleted' + msg);
          this.componentWillMount();
          }.bind(this),
        error: function(err){
          console.log('error occurred on AJAX');
          console.log(err);
        }.bind(this)
       });
    }
  }

  render(){
    var trigger = this.trigger.bind(this);
    return (
      <div>
        <DisplayFavComponent page='favourites' json={this.state.json} trigger = {trigger}/>
      </div>
    );
  }
}
module.exports = Favourites;
