import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AutoCompleteComponent } from "./autocomplete.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import {AutocompletePipe} from './autocomplete.pipe';
import { FilterBarModule } from "../filterbar/filter-bar.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import autocompleteComponentExp from '../../../stories/ng-component-lab/autocomplete.component.exp';



const testData = [
    {id: 'redId', color: 'red'},
    {id: 'yellowId', color: 'yellow'},
    {id: 'orangeId', color: 'orange'},
    {id: 'greenId', color: 'green'},
    {id: 'whiteId', color: 'white'},
    {id: 'blackId', color: 'black'}
];

describe("AutoComplite Tests", () => {
    let component: AutoCompleteComponent;
    let fixture : ComponentFixture<AutoCompleteComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AutoCompleteComponent
            ],
            imports: [
                FormsModule,
                FilterBarModule,
                ReactiveFormsModule,
                HttpModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AutoCompleteComponent);
        component = fixture.componentInstance;
    }));

    it('Create AutoComplite', async(() => {
        expect(component).toBeTruthy();
    }));

    it('Auto Complite build empty DOM List', async(() => {
        component.data = testData;
        fixture.detectChanges();
        const autoCompliteHtml = fixture.nativeElement;
        const listHtml = autoCompliteHtml.querySelector('ul');
        const listItemsCount = autoCompliteHtml.querySelectorAll('li').length;
        expect(listHtml != null && listItemsCount === 0).toBeTruthy();
    }));

    fit('Auto Complite build not empty DOM List', async(() => {
        component.data = testData;
        component.dataSchema = {key: 'id', value: 'color'};
        component.placeholder = 'search text';
        component.label = 'search by color:';
        component.onSearchQueryChanged('re');
        console.info(component.complexData)
        let res = component.autocompletePipe.transform(component.complexData, component.searchQuery);
        fixture.detectChanges();
        console.info(res);
        fixture.whenStable().then(() => {
            const autoCompliteHtml = fixture.nativeElement;
            console.info(component.searchQuery);
            const listHtml = autoCompliteHtml.querySelector('ul');
            const listItemsCount = autoCompliteHtml.querySelectorAll('li').length;
            expect(listHtml != null && listItemsCount === 3).toBeTruthy();
        });      
    }));

});
