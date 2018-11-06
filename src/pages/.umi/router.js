import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from './apollo/index'
import RendererWrapper1 from '/Users/michael/web/code/mcrm/src/pages/.umi/LocaleWrapper.jsx'

let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('/Users/michael/web/code/mcrm/src/components/PageLoading/index').default  }),
    "exact": true
  },
  {
    "component": () => React.createElement(require('/Users/michael/web/code/mcrm/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper1>
          <RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
        </RendererWrapper1>
  );
}
