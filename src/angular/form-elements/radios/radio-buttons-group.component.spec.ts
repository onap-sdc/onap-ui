import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioGroupComponent } from "./radio-buttons-group.component";
import { FormsModule } from "@angular/forms";
import { IRadioButtonModel } from "./radio-button.model";
import { AnimationDirectivesModule } from "../../animations/animation-directives.module";

describe("Radio Buttons unit-tests", () => {
    let fixture: ComponentFixture<RadioGroupComponent>;
    let component: RadioGroupComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RadioGroupComponent
            ],
            imports:[
                FormsModule,
                AnimationDirectivesModule
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(RadioGroupComponent);
        component = fixture.componentInstance;
        component.disabled = false;
        component.options = {
            items: [
                {
                    value: 'val1',
                    name: 'radioTest',
                    label: 'Label of Radio 1'
                },
                {
                    value: 'val2',
                    name: 'radioTest',
                    label: 'Label of Radio 2'
                },
                {
                    value: 'val3',
                    name: 'radioTest',
                    label: 'Label of Radio 3'
                }
            ]
        };
        fixture.detectChanges();
    }));

    it('Component Created', async( () => {
        expect(component).toBeDefined();
    }));

    it('Not possible to choose value which not exists', async(() => {
        component.value = 'test';
        expect(component.value).not.toEqual('test');
    }));

    it('Normal flow', async(() => {
        component.value = component.options.items[0].value;
        fixture.detectChanges();
        expect(component.value).toEqual(component.options.items[0].value);
    }));

    it('Normal flow - test for DOM', async(() => {
        component.value = component.options.items[0].value;
        fixture.detectChanges();
        const radioHtml = fixture.nativeElement;
        const countRadios = radioHtml.querySelectorAll('input').length;
        expect(countRadios === component.options.items.length).toBeTruthy();
    }));
});
