import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FreshFruitsComponent } from './fresh-fruits/fresh-fruits.component';
import { FreshVegetablesComponent } from './fresh-vegetables/fresh-vegetables.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'src/app/fresh-fruits.html', component: FreshFruitsComponent },
  { path: '', component: HomeComponent },
  { path: 'src/app/fresh-vegetables.html', component:FreshVegetablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
