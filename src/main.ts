import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
