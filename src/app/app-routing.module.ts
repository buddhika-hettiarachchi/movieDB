import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'movieDetails/:id', component:MovieDescriptionComponent},
  {path:'search', component:SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
