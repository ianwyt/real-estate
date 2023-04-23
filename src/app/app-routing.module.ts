import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent }   from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SigninComponent }   from './pages/signin/signin.component';
import { SignupComponent }   from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'blogs', component: BlogsComponent }, // Blog page
  { path: 'signin', component: SigninComponent }, // Sign in page
  { path: 'signup', component: SignupComponent }, // Sign up page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
