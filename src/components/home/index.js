import { h, Component } from 'preact';
import style from './style.css';
import ButtonLink from '../ButtonLink';
import ThumbnailList from '../ThumbnailList';


export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
        <ButtonLink name="next" link="hallo.html" rel="dedede"/>
        <section>
          <div class="container mh-auto ph4 ph5-l pt4 cf">
            <ThumbnailList dataUrl="https://picasaweb.google.com/data/feed/api/user/104556693167238279684/albumid/6145290552539081233?imgmax=1280&alt=json"/>
          </div>
        </section>
      </div>
		);
	}
}
