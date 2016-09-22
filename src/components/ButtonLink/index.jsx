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


const ButtonLink = ({ name,link,rel, clickAction }) => (
  <a className="Button" href={link} rel={rel} onClick={clickAction}>
    <span>{name}</span>
  </a>
);

export default ButtonLink;
