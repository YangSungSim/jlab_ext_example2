import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the jlab-ext-example2 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlab-ext-example2:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jlab-ext-example2 is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jlab_ext_example2 server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
