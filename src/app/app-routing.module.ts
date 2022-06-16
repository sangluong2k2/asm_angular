import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AddCateProjectComponent } from './pages/admin/add-cate-project/add-cate-project.component';
import { AddPostComponent } from './pages/admin/Posts/add-post/add-post.component';
import { AddPostcateComponent } from './pages/admin/Posts/add-postcate/add-postcate.component';
import { AdminPostPageComponent } from './pages/admin/Posts/admin-post-page/admin-post-page.component';
import { PostcateComponent } from './pages/admin/Posts/postcate/postcate.component';
import { AddProjectComponent } from './pages/admin/Project/add-project/add-project.component';
import { AdminProjectPageComponent } from './pages/admin/Project/admin-project-page/admin-project-page.component';
import { ProjectcateComponent } from './pages/admin/projectcate/projectcate.component';
import { AdminUserPageComponent } from './pages/admin/Users/admin-user-page/admin-user-page.component';
import { EditUserComponent } from './pages/admin/Users/edit-user/edit-user.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DetailPostsPageComponent } from './pages/detail-posts-page/detail-posts-page.component';
import { DetailProjectPageComponent } from './pages/detail-project-page/detail-project-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/guard/admin.guard';

const routes: Routes = [
  {path: "", component:WebsiteLayoutComponent},

  {path: "post", component:PostPageComponent},
  {path: "post/:id", component:DetailPostsPageComponent},

  {path: "project", component:ProjectPageComponent},
  {path: "project/:id", component:DetailProjectPageComponent},

  {path: "contact", component:ContactPageComponent},

  {path: "signin", component:SigninComponent},
  {path: "signup", component:SignupComponent},

  {path: "admin",canActivate:[AdminGuard], component:AdminLayoutComponent, children:[
    
    {path: "post", component:AdminPostPageComponent},
    {path: "post/add", component:AddPostComponent},
    {path: "post/:id", component:AddPostComponent},

    {path: "project", component:AdminProjectPageComponent},
    {path: "project/add", component:AddProjectComponent},
    {path: "project/:id", component:AddProjectComponent},

    {path: "user", component:AdminUserPageComponent},
    {path: "user/:id", component:EditUserComponent},

    {path: "post_cate", component:PostcateComponent},
    {path: "post_cate/add", component:AddPostcateComponent},
    {path: "post_cate/:id", component:PostcateComponent},

    {path: "project_cate", component:ProjectcateComponent},
    {path: "project_cate/add", component:AddCateProjectComponent},
    {path: "project_cate/:id", component:ProjectcateComponent},
  ]},

  {path: "**", component:WebsiteLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
