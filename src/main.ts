import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { ConsultaComponent } from './app/components/consulta/consulta.component';

const routes: Routes = [
  { path:'', component: ConsultaComponent}
];

bootstrapApplication(AppComponent, {
  providers: [ provideHttpClient(), provideRouter(routes)]

}).catch(err => console.error(err));
