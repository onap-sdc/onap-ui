import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { ButtonFileOpenerComponent } from "./button-file-opener.component";
import { CommonModule } from "@angular/common";
import { SvgIconModule } from './../svg-icon/svg-icon.module';

@NgModule({
    declarations: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
    imports: [
        CommonModule,
        SvgIconModule
    ],
    exports: [
        ButtonComponent,
        ButtonFileOpenerComponent
    ],
})
export class ButtonsModule {

}
