import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationModule } from '@angular/core';

platformBrowserDynamic().bootstrapModule(ApplicationModule)
  .catch(err => console.error(err));
