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
    <div className="">
      <div className="dt-l w-100 overflow-x-hidden">
        <div className="dn dtc-l w-50 relative z-1 v-mid">
          <h2 className="f1">{alt}</h2>
        </div>
        <div className="dtc-l w-100 absolute">
          <div className="FlexEmbed" style={Styles.coverImage}>
            <div className="FlexEmbed-ratio FlexEmbed-ratio--16by9"></div>
            <div className="FlexEmbed-content">
              <img src={imgUrl} alt={alt} style={Styles.hideImage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareThumb;
