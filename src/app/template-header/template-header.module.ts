import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TemplateHeaderRoutingModule } from "./template-header-routing.module";
import { TemplateHeaderComponent } from "./template-header.component";

@NgModule({
  imports: [TemplateHeaderRoutingModule, IonicModule],
  declarations: [TemplateHeaderComponent]
})
export class TemplateHeaderModule { }
