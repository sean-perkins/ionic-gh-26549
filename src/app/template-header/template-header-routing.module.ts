import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TemplateHeaderComponent } from "./template-header.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'first',
        component: TemplateHeaderComponent,
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'second',
        component: TemplateHeaderComponent,
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateHeaderRoutingModule { }
