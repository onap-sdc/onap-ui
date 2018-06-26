import { Component, ComponentRef, EventEmitter, Input, Output } from "@angular/core";
import { ModalService } from "./modal.service";
import { RippleAnimationAction } from "../animations/ripple-click.animation.directive";
import { ModalComponent } from "./modal.component";

@Component({
    selector: "sdc-modal-close-button",
    template: `
    <div class="sdc-modal__close-button"
        SdcRippleClickAnimation
        [ngClass]="disabled ? 'disabled' : ''"
        [rippleOnAction]="!disabled && rippleAnimationAction"
        [attr.data-tests-id]="testId"
        (click)="!disabled && closeModal()"
        >
        <svg-icon name="close" [mode]="disabled? 'secondary' : 'info'" size="small"></svg-icon>
    </div>
    `
})
export class ModalCloseButtonComponent {

    @Input() testId: string;
    @Input() disabled: boolean;
    @Input() modalInstanceRef: ComponentRef<ModalComponent>;
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
    
    public rippleAnimationAction: RippleAnimationAction = RippleAnimationAction.MOUSE_ENTER;

    constructor(private modalService: ModalService) {
    }

    public closeModal = (): void => {
        this.modalInstanceRef.instance.closeModal();
        this.onClick.emit();
    }

}
