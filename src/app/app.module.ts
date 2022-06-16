import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { ProjectComponent } from './components/project/project.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { DetailPostsPageComponent } from './pages/detail-posts-page/detail-posts-page.component';
import { DetailProjectPageComponent } from './pages/detail-project-page/detail-project-page.component';
import { AdminPostPageComponent } from './pages/admin/Posts/admin-post-page/admin-post-page.component';
import { AdminProjectPageComponent } from './pages/admin/Project/admin-project-page/admin-project-page.component';
import { AdminUserPageComponent } from './pages/admin/Users/admin-user-page/admin-user-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AddPostComponent } from './pages/admin/Posts/add-post/add-post.component';
import { AddProjectComponent } from './pages/admin/Project/add-project/add-project.component';
import { EditUserComponent } from './pages/admin/Users/edit-user/edit-user.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

import { ProjectcateComponent } from './pages/admin/projectcate/projectcate.component';
import { PostcateComponent } from './pages/admin/Posts/postcate/postcate.component';
import { AddPostcateComponent } from './pages/admin/Posts/add-postcate/add-postcate.component';
import { AddCateProjectComponent } from './pages/admin/add-cate-project/add-cate-project.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    ProjectComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    PostPageComponent,
    ProjectPageComponent,
    DetailPostsPageComponent,
    DetailProjectPageComponent,
    AdminPostPageComponent,
    AdminProjectPageComponent,
    AdminUserPageComponent,
    ContactPageComponent,
    AddPostComponent,
    AddProjectComponent,
    EditUserComponent,
    SigninComponent,
    SignupComponent,
    ProjectcateComponent,
    PostcateComponent,
    AddPostcateComponent,
    AddCateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
