import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { InputComponent } from "./input.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe("Input Tests", () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InputComponent ],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(InputComponent);
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
        const htmlInputComponent: HTMLElement = fixture.nativeElement;
        const input: HTMLElement = htmlInputComponent.querySelector('input');
        const label: HTMLElement = htmlInputComponent.querySelector('label');
        expect((input != null) && (label != null)).toBeTruthy();
    }));

    it("Input value working", async(() => {
        component.value = 'testtesttest';
        fixture.detectChanges();
        const htmlInputComponent: HTMLElement = fixture.nativeElement;
        const inputValue = htmlInputComponent.querySelector('input').value;
        expect(inputValue === component.value).toBeTruthy();
    }));

    it("If required consist required style", async(() => {
        component.label = 'testLabel';
        component.required = true;
        fixture.detectChanges();
        const htmlInputComponent: HTMLElement = fixture.nativeElement;
        const requiredElement = htmlInputComponent.querySelector('.required');
        expect(requiredElement).toBeTruthy();
    }));

    it("Add element for sign of validation", async(() => {
        component.valid = false;
        component.dirty = true;
        component.required = true;
        fixture.detectChanges();
        const htmlInputComponent: HTMLElement = fixture.nativeElement;
        const requiredElement = htmlInputComponent.querySelector('.error');
        expect(requiredElement).toBeTruthy();
    }));
});
