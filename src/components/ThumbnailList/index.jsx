import { h, Component } from 'preact';
import axios from 'axios';
import SquareThumb from '../SquareThumb';
import ButtonLink from '../ButtonLink';
import _ from 'lodash';

export default class ThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    };
    this.handleClick = this.handleClick.bind(this);
    }

  componentWillMount() {
    axios.get(this.props.source)
      .then((response) => {
        this.setState({
          products: response.data.products
        });
      });
  }

  componentDidMount() {
    let List = document.querySelectorAll('li');
    _.map(List, (list) => {
      list.style.color="red";
    })
  }

  handleClick() {
    let List = document.querySelectorAll('li');
    _.map(List, (list) => {
      list.classList.toggle('blue');
    })
  }

  render() {
    var Titles = _.map(this.state.products, (product) => {
      return (

        <li>{product.name}</li>

      )
    });

    return (
      <div className="container mh-auto cf">
        <div className="w-50 fl">
          <ul>
            <li>{Titles}</li>
          </ul>
        </div>
        <div className="w-50 fl">
          <ButtonLink name="update" clickAction={this.handleClick} />
        </div>
      </div>
    );
  }
}
