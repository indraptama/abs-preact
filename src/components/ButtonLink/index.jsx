import { h, Component } from 'preact';
import style from './style.css';

// export default class ButtonLink extends Component {
//   render() {
//     return (
//       <div class={style.Button}>
//         <span>MyComponentsdsds</span>
//       </div>);
//   }
// }
//
// ButtonLink.propTypes = {
// };


const ButtonLink = ({ name,link,rel }) => (
  <a className="Button" href={link} rel={rel}>
    <span>{name}</span>
  </a>
);

export default ButtonLink;
