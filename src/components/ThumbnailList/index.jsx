import { h, Component } from 'preact';
import axios from 'axios';
import SquareThumb from '../SquareThumb';
import _ from 'lodash';

export default class ThumbnailList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        repos:'',
        titles:'',
        excerpts:''
      };
    }

  componentWillMount() {
    axios.get(this.props.source)
      .then((response) => {
        console.log(response.data)
        this.setState({
          products: response.data.products
          // titles: response.title,
          // excerpts: response.excerpt
        })
      })
  }



  render() {
    var Titles = _.map(this.state.products, (product) => {
      return (
        <div>
        <li>{product.name}</li>

        </div>
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
