import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TextareaComponent } from "./textarea.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe("textarea Tests", () => {
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

    it("textarea give value back", async(() => {
        component.value = 'test';
        fixture.detectChanges();
        expect(component.value).toEqual('test');
    }));

    it("textarea contains textarea and label", async(() => {
        component.value = 'test';
        component.label = 'testlable';
        fixture.detectChanges();
        const htmlTextareaComponent: HTMLElement = fixture.nativeElement;
        const textarea: HTMLElement = htmlTextareaComponent.querySelector('textarea');
        const label: HTMLElement = htmlTextareaComponent.querySelector('label');
        expect((textarea != null) && (label != null)).toBeTruthy();
    }));

    it("textarea value working", async(() => {
        component.value = 'testtesttest';
        fixture.detectChanges();
        const htmlTextareaComponent: HTMLElement = fixture.nativeElement;
        const textareaValue = htmlTextareaComponent.querySelector('textarea').value;
        expect(textareaValue === component.value).toBeTruthy();
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
