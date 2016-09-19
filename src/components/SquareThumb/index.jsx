// SquareThumb
// imgUrl
// Alt

import { h, Component } from 'preact';
import 'suitcss-components-flex-embed';
import style from './style.css';


const SquareThumb = ({ imgUrl, alt }) => {

  const Styles = {
    coverImage : {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    hideImage: {
      display: 'none',
      maxWidth: '100%',
    }
  };

  return (
    <div className="FlexEmbed" style={Styles.coverImage}>
      <div className="FlexEmbed-ratio"></div>
      <div className="FlexEmbed-content">
        <img src={imgUrl} alt={alt} style={Styles.hideImage}/>
      </div>
    </div>
  );
};

export default SquareThumb;
