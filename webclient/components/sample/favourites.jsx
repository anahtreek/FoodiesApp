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

  del(id) {
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

  update(id,comments) {
       $.ajax({
           url: '/restaurants/update/'+id,
           type: 'PATCH',
           data: {
               'comments': comments
           },
           success: function(data) {
               console.log("updated");
               this.componentWillMount();
           }.bind(this),
           error: function(err) {
               console.log('error occurred on AJAX');
               console.log(err);
           }.bind(this)
       });
  }

  render(){
    var del = this.del.bind(this);
    var update = this.update.bind(this);
    return (
      <div>
        <DisplayFavComponent page='favourites' json={this.state.json} del = {del} update = {update}/>
      </div>
    );
  }
}
module.exports = Favourites;
