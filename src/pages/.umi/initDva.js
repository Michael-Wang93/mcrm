import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/Users/michael/web/code/mcrm/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/Users/michael/web/code/mcrm/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/Users/michael/web/code/mcrm/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('/Users/michael/web/code/mcrm/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/michael/web/code/mcrm/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/michael/web/code/mcrm/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('/Users/michael/web/code/mcrm/src/pages/User/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('/Users/michael/web/code/mcrm/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('/Users/michael/web/code/mcrm/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('/Users/michael/web/code/mcrm/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('/Users/michael/web/code/mcrm/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('/Users/michael/web/code/mcrm/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'profile', ...(require('/Users/michael/web/code/mcrm/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('/Users/michael/web/code/mcrm/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('/Users/michael/web/code/mcrm/src/pages/Account/Settings/models/geographic.js').default) });
