import {
  Component, ElementRef, AfterViewInit, Renderer, ViewChildren, QueryList
} from "@angular/core";
import {FormlyMessages, FormlyMessage} from "./../services/formly.messages";
import {FormlyPubSub} from "./../services/formly.event.emitter";
import {Field} from "./field";
import {SingleFocusDispatcher} from "../services/formly.single.focus.dispatcher";


@Component({
  selector: "formly-field-input",
  template: `
    <div class="form-group" [ngFormModel]="form" [ngClass]="{'has-danger': !formControl.valid}" *ngIf="!templateOptions.hidden">
      <label attr.for="{{key}}" class="form-control-label">{{templateOptions.label}}</label>
        <input type="{{templateOptions.type}}" [ngControl]="key" class="form-control" id="{{key}}"
          placeholder="{{templateOptions.placeholder}}" [disabled]="templateOptions.disabled"
          (keyup)="inputChange($event, 'value')" (change)="inputChange($event, 'value')" [(ngModel)]="model"
          (focus)="onInputFocus()" [ngClass]="{'form-control-danger': !form.controls[key].valid}" #inputElement
          >
        <small class="text-muted">{{templateOptions.description}}</small>
        <small class="text-muted text-danger"><formly-message [control]="key"></formly-message></small>
      </div>
    `,
  directives: [FormlyMessage],
  inputs: [ "form", "update", "templateOptions", "key", "field", "formModel", "model"],
  queries: {inputComponent: new ViewChildren("inputElement")}
})
export class FormlyFieldInput extends Field implements AfterViewInit {

  constructor(fm: FormlyMessages, ps: FormlyPubSub, renderer: Renderer, focusDispatcher: SingleFocusDispatcher) {
    super(fm, ps, renderer, focusDispatcher);
  }

  inputComponent: QueryList<ElementRef>;

  protected setNativeFocusProperty(newFocusValue: boolean): void {
    if (this.inputComponent.length > 0) {
      this.renderer.invokeElementMethod(this.inputComponent.first.nativeElement, "focus", [newFocusValue]);
    }
  }
}
