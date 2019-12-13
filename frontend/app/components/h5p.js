import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { H5P } from 'h5p-standalone'; // ES6
import { run } from '@ember/runloop';
import { action } from '@ember/object';

export default class H5pComponent extends Component {
  @action
  async renderH5P(el) {
    const h5pLocation = this.args.location;

    const options = {
      frameJs: '/h5p/frame.bundle.js',
      frameCss: '/h5p/h5p.css'
    };

    const h5p = await new H5P(el, h5pLocation, options);
  }
}
