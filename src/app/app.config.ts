import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../environments/environment";
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(AuthModule.forRoot({
        domain: environment.auth0Domain,
        clientId: environment.clientId,
        authorizationParams: { redirect_uri: `${window.location.origin}/home` }
    })),
    provideAnimations()
],

};
