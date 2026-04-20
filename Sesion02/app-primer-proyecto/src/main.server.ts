import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { Home } from './app/home/home';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Home, config, context);

export default bootstrap;
