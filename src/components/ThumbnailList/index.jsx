import { h, render, Component } from 'preact';
import axios from 'axios';
<<<<<<< HEAD
import GalleryThumb from '../GalleryThumb';
=======
import SquareThumb from '../SquareThumb';
<<<<<<< HEAD
>>>>>>> origin/master
=======
>>>>>>> origin/master
import ButtonLink from '../ButtonLink';
import _ from 'lodash';



export default class ThumbnailList extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
<<<<<<< HEAD
    this.state= {
      datas:[]
    }
  }
=======
    this.state = {
      products:[]
    };
    this.handleClick = this.handleClick.bind(this);
    }
>>>>>>> origin/master
=======
    this.state = {
      products:[]
    };
    this.handleClick = this.handleClick.bind(this);
    }
>>>>>>> origin/master

  componentWillMount() {
    axios.get(this.props.dataUrl) // Data Url
      .then((response) => {
<<<<<<< HEAD
<<<<<<< HEAD
        let theDatas = _.clone(response.data.feed.entry);
        console.log(theDatas);
        this.setState({
          datas: theDatas
=======
        this.setState({
          products: response.data.products
>>>>>>> origin/master
=======
        this.setState({
          products: response.data.products
>>>>>>> origin/master
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
<<<<<<< HEAD
    var ThumbnailList = _.map(this.state.datas, (data, i) => {
      return(
        <div className="galThumb fl w-100 w-50-m w-60-l foo" key={i +'hallo'}>

          <GalleryThumb
            title={data.summary.$t}
            imgUrl={data.media$group.media$content["0"].url}
            linkUrl={data.content.src}
          />
        </div>
      )
    })

    return (
      <div className="galThumbList flex flex-wrap cf">
          {ThumbnailList}
=======
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
>>>>>>> origin/master
      </div>
    );
  }
}
