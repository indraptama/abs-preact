// Components Gallery Thumbnail
// props : linkUrl, imgUrl, title, desc

import { h, Component } from 'preact';
import SquareThumb from '../SquareThumb';
import hoverAnimation from './animation';


export default class GalleryThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    }
  }


  handleResize(e){
    this.setState({
      windowWidth: window.innerWidth
    }).bind(this);
  }



  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    if (this.state.windowWidth > 960 ) {
      hoverAnimation();
    }
  }

  render() {
    return (
        <div className="pa1 pa3-l mb5-l link overflow-hidden foo">
          <div className="relative galThumb-container ml5-l">
            <a className="galThumb-img db" href={this.props.linkUrl} >
              <SquareThumb imgUrl={this.props.imgUrl} alt={this.props.alt}/>
            </a>
            <a className="galThumb-desc dn dib-l absolute w-80 z-2 l-4 mb4 ml0 b0 link orange" href={this.props.linkUrl} >
              <article>
                  <h3 className="f1 ttc lh-solid tracked-tight">{this.props.title}</h3>
                  <p>{this.props.desc}</p>
              </article>
            </a>
          </div>
        </div>
    );
  }
}
