import { IonReactRouter, } from '@ionic/react-router';
import { Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';

import { routes } from './routes/routes';
import MainLayout from './layouts/MainLayout';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch> {routes.map(({ path, exact, component: Component }) => ( 
          <Route key={path} path={path} exact={exact} render={() => (
                <MainLayout>
                  <Component />
                </MainLayout>
              )}
            />
          ))}
          <Route
            render={() => (
              <MainLayout>
                <h2>404 Not Found</h2>
              </MainLayout>
            )}
          />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;