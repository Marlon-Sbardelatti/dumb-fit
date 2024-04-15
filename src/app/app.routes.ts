import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CriarComponent } from './criar/criar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { TreinosComponent } from './treinos/treinos.component';

export const routes: Routes = [
  {
    'path': '',
    component: LoginComponent
  },
  {
    'path': 'home',
    component: HomeComponent
  },
  {
    'path': 'criar',
    component: CriarComponent
  },
  {
    'path': 'buscar',
    component: BuscarComponent
  },
  {
    'path': 'treinos',
    component: TreinosComponent
  },
];
