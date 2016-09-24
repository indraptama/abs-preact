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


<<<<<<< HEAD
<<<<<<< HEAD
const ButtonLink = ({ name,link,rel }) => (
  <a class={style.Button} href={link} rel={rel}>
=======
const ButtonLink = ({ name,link,rel, clickAction }) => (
  <a className="Button" href={link} rel={rel} onClick={clickAction}>
>>>>>>> origin/master
=======
const ButtonLink = ({ name,link,rel, clickAction }) => (
  <a className="Button" href={link} rel={rel} onClick={clickAction}>
>>>>>>> origin/master
    <span>{name}</span>
  </a>
);

export default ButtonLink;
