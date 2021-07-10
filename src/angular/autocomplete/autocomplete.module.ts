import { NgModule } from "@angular/core";
import { AutoCompleteComponent } from "./autocomplete.component";
import { CommonModule } from "@angular/common";
import { FilterBarModule } from "../filterbar/filter-bar.module";
import { AutocompletePipe } from "./autocomplete.pipe";
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AutoCompleteComponent,
        AutocompletePipe
    ],
    imports: [
        FilterBarModule,
        CommonModule,
        HttpModule
    ],
    exports: [
        AutoCompleteComponent
    ],
})
export class AutoCompleteModule {
}
