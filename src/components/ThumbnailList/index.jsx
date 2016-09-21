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
        excerpts:'',
        products:[]
      };
    }

  // componentWillMount() {
  //   axios.get(this.props.source)
  //     .then((response) => {
  //       //console.log(response.data.products)
  //       const splitResponse = _.chunk(response.data.products, 10);
  //       this.setState({
  //         products: splitResponse
  //       })
  //     })
  // }

  componentWillMount() {
    axios.get(this.props.source)
      .then((response) => {
        var responseSlice = response.data.products;
        var test = _.slice(responseSlice, 0,4);
        console.log(test);


        this.setState({
          products: test
          // titles: response.title,
          // excerpts: response.excerpt
        });
      });
  }


  render() {
    var Titles = _.map(this.state.products, (product) => {
      return (
        <div>
        <li>{product.name}</li>
        </div>
      )
    });

    // var Titles = this.state.products.map((product) => {
    //     return (
    //       <li>{product.name}</li>
    //     )
    // });

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
