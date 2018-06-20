import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TextareaComponent } from "./textarea.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe("Input Tests", () => {
    let component: TextareaComponent;
    let fixture: ComponentFixture<TextareaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TextareaComponent ],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(TextareaComponent);
        component = fixture.componentInstance;
    }));

    it("Component Created", async(() => {
        expect(component).toBeDefined();
    }));

    it("Input give value back", async(() => {
        component.value = 'test';
        fixture.detectChanges();
        expect(component.value).toEqual('test');
    }));

    it("Input contains input and label", async(() => {
        component.value = 'test';
        component.label = 'testlable';
        fixture.detectChanges();
        const htmlTextareaComponent: HTMLElement = fixture.nativeElement;
        const input: HTMLElement = htmlTextareaComponent.querySelector('input');
        const label: HTMLElement = htmlTextareaComponent.querySelector('label');
        expect(input && label).toBeTruthy();
    }));

    it("Input value working", async(() => {
        component.value = 'testtesttest';
        fixture.detectChanges();
        const htmlTextareaComponent: HTMLElement = fixture.nativeElement;
        const inputValue = htmlTextareaComponent.querySelector('input').value;
        expect(inputValue === component.value).toBeTruthy();
    }));

    it("If required consist required style", async(() => {
        component.label = 'testLabel';
        component.required = true;
        fixture.detectChanges();
        const htmlTextareaComponent: HTMLElement = fixture.nativeElement;
        const requiredElement = htmlTextareaComponent.querySelector('.required');
        expect(requiredElement).toBeTruthy();
    }));

    it("Add element for sign of validation", async(() => {
        component.valid = false;
        component.dirty = true;
        component.required = true;
        fixture.detectChanges();
        const htmlTextareaComponent: HTMLElement = fixture.nativeElement;
        const requiredElement = htmlTextareaComponent.querySelector('.error');
        expect(requiredElement).toBeTruthy();
    }));
});
