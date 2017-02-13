import React from 'react';
import {Card} from 'semantic-ui-react';
import DisplayFavComponent from './sample/displayFavourites.jsx';

class Favourites extends React.Component {
    constructor() {
        super();
        this.state = {
            json: []
        };
    }
    componentWillMount() {
        $.ajax({
            url: '/restaurants/view',
            type: 'GET',
            success: function(data) {
                console.log('Successfully got JSON' + data);
                this.setState({json: data.restaurant});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }

    del(id) {
        $.ajax({
            url: '/restaurants/delete/' + id,
            type: 'DELETE',
            success: function(msg) {
                console.log('Successfully deleted' + msg);
                this.whenDel(id);
                // $.each(data, function(i, el) {
                //     if (this._id == id) {
                //         data.splice(i, 1);
                //     }
                //     this.setState({json:data});
                // });
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }

    whenDel(id) {
        let data = this.state.json;
        console.log(data);
        $.each(data, function(i, el) {
            console.log(el.name + el._id);
            if (el._id == id) {
                console.log(i + 'inside if');
                data.splice(i, 1);
                return false;
            }
        });
        // data.filter(function(obj) {
        //     return obj._id !== id;
        // });
        this.setState({json: data});
        console.log(this.state.json);
    }

    update(id, comments) {
        $.ajax({
            url: '/restaurants/update/' + id,
            type: 'PATCH',
            data: {
                'comments': comments
            },
            success: function(data) {
                this.whenUpdate(id, comments);
                console.log("updated");
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }

    whenUpdate(id, comments) {
        let data = this.state.json;
        $.each(data, function(i, el) {
            console.log(el.comments + comments);
            if (el._id == id) {
                console.log(i + 'inside if');
                el.comments = comments;
            }

        });
        this.setState({json: data});
    }

    render() {
        var del = this.del.bind(this);
        var update = this.update.bind(this);
        return (
            <div>
                <DisplayFavComponent page='favourites' json={this.state.json} del={del} update={update}/>
            </div>
        );
    }
}
module.exports = Favourites;
