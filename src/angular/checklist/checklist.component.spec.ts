import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ChecklistComponent } from "./checklist.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormElementsModule } from "../form-elements/form-elements.module";
import { ChecklistItemModel } from "./models/ChecklistItem";
import { ChecklistModel } from "./models/Checklist";
const checklistFirstLevelValuesExample = [];
const checklistSecondLevelValuesExample = [];
const checklistThirdLevelValuesExample = [];
const checkListExample: ChecklistModel =  new ChecklistModel(checklistFirstLevelValuesExample,
    [new ChecklistItemModel('1', false, false,
        new ChecklistModel(checklistSecondLevelValuesExample, [new ChecklistItemModel('1.1'),
                                                                new ChecklistItemModel('1.2', true, true, new ChecklistModel(checklistThirdLevelValuesExample, [new ChecklistItemModel('1.2.1', false, true),
                                                                                                                                                                    new ChecklistItemModel('1.2.2', false, true),
                                                                                                                                                                    new ChecklistItemModel('1.2.3', false, true)])),
                                                                new ChecklistItemModel('1.3', false, false)])),
        new ChecklistItemModel('2'),
        new ChecklistItemModel('3')]);

describe("Input Tests", () => {
    let component: ChecklistComponent;
    let fixture: ComponentFixture<ChecklistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChecklistComponent ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                FormElementsModule
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(ChecklistComponent);
        component = fixture.componentInstance;
    }));

    it("Component Checklist Created", async(() => {
        expect(component).toBeDefined();
    }));

    it("Check count of Checkboxes", ( async () => {
        component.checklistModel = checkListExample;
        fixture.detectChanges();
        const checklistHtml = fixture.nativeElement;
        const count_checkboxes = checklistHtml.querySelectorAll('sdc-checkbox').length;
        expect(count_checkboxes > 1).toBeTruthy();
    }));

    it("Check count of Checkboxes", ( async () => {
        component.checklistModel = checkListExample;
        fixture.detectChanges();
        const checklistHtml = fixture.nativeElement;
        const count_checkboxes_true = checklistHtml.querySelectorAll("sdc-checkbox[ng-reflect-checked=true]").length;
        const count_checkboxes_false = checklistHtml.querySelectorAll("sdc-checkbox[ng-reflect-checked=false]").length;
        expect((count_checkboxes_true === 4) && (count_checkboxes_false === 2)).toBeTruthy();
    }));

});
