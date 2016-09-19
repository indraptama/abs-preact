import { h, Component } from 'preact';
import axios from 'axios';
import SquareThumb from '../SquareThumb';

export default class ThumbnailList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loading: true
      };
    }

  componentWillMount() {
    axios.get('https://api.github.com/users/indraptama/repos')
      .then((response) => {
        this.setState({
          title: response.title
        })
      })
  }



  render() {
    return (
      <div style="width:25%">
        <SquareThumb imgUrl={this.state.imgUrl} alt={this.state.alt}/>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
