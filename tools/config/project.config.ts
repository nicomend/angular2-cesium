import { join } from 'path';

import {SeedConfig, BUILD_TYPES} from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  CESIUM_FOLDER_NAME = 'Cesium';
  CESIUM_JS_PROD = `${this.CESIUM_FOLDER_NAME}/Cesium.js`;
  CESIUM_CSS_PROD = `${this.CESIUM_FOLDER_NAME}/Widgets/widgets.css`;
  CESIUM_LOCATION = `node_modules/cesium/Build/Cesium/**`;

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    this.SYSTEM_BUILDER_CONFIG.packageConfigPaths = [
      ...this.SYSTEM_BUILDER_CONFIG.packageConfigPaths,
      join('node_modules', '@ngrx', '*', 'package.json')
    ];

    this.SYSTEM_BUILDER_CONFIG.packages['@ngrx/core'] = {
      main: 'bundles/core.umd.js',
      defaultExtension: 'js'
    };

    this.SYSTEM_BUILDER_CONFIG.packages['@ngrx/store'] = {
      main: 'bundles/store.umd.js',
      defaultExtension: 'js'
    };

    this.SYSTEM_BUILDER_CONFIG.packages['@ngrx/store-devtools'] = {
      main: 'bundles/store-devtools.umd.js',
      defaultExtension: 'js'
    };

    this.SYSTEM_BUILDER_CONFIG.packages['@ngrx/store-log-monitor'] = {
      main: 'bundles/store-log-monitor.umd.js',
      defaultExtension: 'js'
    };

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'cesium/Build/Cesium/Cesium.js', inject: 'libs', env: BUILD_TYPES.DEVELOPMENT},
      {src: 'cesium/Build/Cesium/Widgets/widgets.css', inject: true, env: BUILD_TYPES.DEVELOPMENT},
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
