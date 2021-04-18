import { ContactusComponent } from './contactus/contactus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'movieDetails/:id', component:MovieDescriptionComponent},
  {path:'search', component:SearchResultComponent},
  {path:'about', component:AboutUsComponent},
  {path:'privacy', component:PrivacyPolicyComponent},
  {path:'readmore', component:ReadMoreComponent},
  {path:'contact', component:ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
