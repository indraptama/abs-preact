import { h, Component } from 'preact';
import axios from 'axios';
import SquareThumb from '../SquareThumb';
import _ from 'lodash';

export default class ThumbnailList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        titles:''
      };
    }

  componentWillMount() {
    axios.get('http://localhost/wordpress/wp-json/wp/v2/posts')
      .then((response) => {
        this.setState({
          titles: response.data
        })
      })
  }



  render() {
    var Titles = _.map(this.state.titles, (title) => {
      return (
        <li>{title.name}</li>
      )
    });


    return (
      <div className="container mh-auto cf">
        <div className="w-50 fl">
          <ul>{Titles}</ul>
        </div>
        <div className="w-50 fl">
          <ul>{Titles}</ul>
        </div>
      </div>
    );
  }
}
