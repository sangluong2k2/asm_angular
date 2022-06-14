import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
  {path: "", component:WebsiteLayoutComponent},
  {path: "post", component:PostPageComponent},
  {path: "project", component:ProjectPageComponent},
  {path: "contact", component:ContactPageComponent},
  {path: "admin", component:AdminLayoutComponent},
  {path: "**", component:WebsiteLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
