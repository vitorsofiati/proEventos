import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideAnimations(), // Adiciona suporte a animações
    ...(appConfig.providers || []),
  ],
}).catch((err) => console.error(err));
