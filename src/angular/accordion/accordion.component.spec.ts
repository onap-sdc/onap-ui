import {AccordionComponent} from './accordion.component';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconModule } from "../svg-icon/svg-icon.module";
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import {NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('Tests for Accordion', (() => {
    let fixture: ComponentFixture<AccordionComponent>;
    let component: AccordionComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AccordionComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [
                SvgIconModule
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
              ]
        }).compileComponents();
        fixture = TestBed.createComponent(AccordionComponent);
        component = fixture.componentInstance;
    }));

    it(('Component Accordion create'), async(() => {
        expect(component).toBeDefined();
    }));

    fit (('Component Accordion open onClick'), async(() => {
        const closeState = fixture.nativeElement.querySelectorAll('.down').length;
        component.toggleAccordion();
        fixture.detectChanges();
        const openState = fixture.nativeElement.querySelectorAll('.down').length;
        expect(closeState === 0 && openState === 1).toBeTruthy();
    }));
}));
