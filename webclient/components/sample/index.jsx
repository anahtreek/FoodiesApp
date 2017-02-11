import React from 'react';
import Search from './search.jsx';
import Result from './result.jsx';
class IndexComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResult: [],
            bvalue:'',
            bcolor:'',
            bicon:'',
            page:'',
            trigger:''
        };
    }
    getResturantDataFromZomato(city, cuisine)
    {
    $.ajax({

        url: "https://developers.zomato.com/api/v2.1/cities?q="+city,
        type: 'GET',
        beforeSend: function(request) {
            request.setRequestHeader("user-key", "e55fb1adc2dcb7d1c3f64720b79a0c5a");
        },
        success: function(data) {
          var cityId = data.location_suggestions[0].id;
            console.log('Successfully got city id from Zomato' + cityId);
            $.ajax({

                url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityId + "&entity_type=city&q=" + cuisine + "&count=10",
                type: 'GET',
                beforeSend: function(request) {
                    request.setRequestHeader("user-key", "e55fb1adc2dcb7d1c3f64720b79a0c5a");
                },
                success: function(data) {
                    console.log('Successfully got JSON from Zomato' + data.restaurants[0].restaurant.name);
    								this.setState({searchResult: data.restaurants,
                    bvalue:'Add to Favourites',
                    bcolor:'green',
                    bicon:'plus',
                    page:'search',
                  trigger:this.addToFav.bind(this)});

                }.bind(this),
                error: function(err) {
                    console.log('error occurred on AJAX');
                    console.log(err);
                }.bind(this)
            });

        }.bind(this),
        error: function(err) {
            console.log('error occurred on AJAX');
            console.log(err);
        }.bind(this)
    });
    }
    addToFav(id, img, name, address, cuisines, rating) {
      console.log('ADDDDDDDDDDDD');
      $.ajax({
        url: '/restaurants/add' ,
        type: 'POST',
        data:{
          "id":id,
          "img":img,
          "name":name,
          "address":address,
          "cuisines":cuisines,
          "rating":rating
        },
        success: function(data) {
          console.log(data);
            console.log('Added');
        }.bind(this),
        error: function(err) {
            console.log('error');
            console.log(err);
        }.bind(this)
    });
    }


    render() {
        return (
            <div>
                <Search search={this.getResturantDataFromZomato.bind(this)}/>
                <Result sr = {this.state.searchResult}
                  bvalue = {this.state.bvalue}
                  bcolor = {this.state.bcolor}
                  bicon = {this.state.bicon}
                  page = {this.state.page}
                trigger = {this.state.trigger}/>
            </div>
        );
    }
}
export default IndexComponent;
