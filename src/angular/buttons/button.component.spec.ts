import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ButtonComponent } from './button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { SvgIconModule } from './../svg-icon/svg-icon.module';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

describe("Radio Buttons unit-tests", () => {
    let fixture: ComponentFixture<ButtonComponent>;
    let component: ButtonComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ButtonComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule
            ],
            providers:[
                SvgIconComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
              ]
        }).compileComponents();
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        component.disabled = false;
    }));

    it('Component create Button component', async(() => {
        expect(component).toBeDefined();
    }));

    it('Component Button make dissabled', async(() => {
        component.text = 'Test';
        component.disableButton();
        fixture.detectChanges();
        const buttonComponentHtml = fixture.nativeElement;
        const countDisabled = buttonComponentHtml.querySelectorAll(':disabled').length;
        expect(countDisabled).toBeTruthy();
    }));

    it('Component Button check Icon existance', async(() => {
        component.text = 'Test';
        component.icon_name = 'save';
        fixture.detectChanges();
        const buttonComponentHtml = fixture.nativeElement;
        const icon = buttonComponentHtml.querySelector('svg-icon');
        expect(icon).toBeTruthy();
    }));
});
