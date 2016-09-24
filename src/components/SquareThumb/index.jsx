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
<<<<<<< HEAD
    <div className="FlexEmbed">
      <div className="FlexEmbed-ratio FlexEmbed-ratio--4by3"></div>
      <div className="FlexEmbed-content" style={Styles.coverImage}>
=======
    <div className="FlexEmbed" style={Styles.coverImage}>
      <div className="FlexEmbed-ratio FlexEmbed-ratio--16by9s"></div>
      <div className="FlexEmbed-content">
>>>>>>> origin/master
        <img src={imgUrl} alt={alt} style={Styles.hideImage}/>
      </div>
    </div>
  );
};

export default SquareThumb;
