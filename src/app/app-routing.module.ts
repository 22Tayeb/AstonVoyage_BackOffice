import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EleveResolver } from './resolver/eleve.resolver';
import { AuthGuard } from './guard/eleve.guard';


const routes: Routes = [
  { 
    path: 'create',
    component : CreateComponent
  },
  {
    path: 'details/:id', 
    component: DetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { 
      eleves : EleveResolver
    },
    canActivate:[AuthGuard]
  },
  {
    path: '',
    component: ConnexionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
