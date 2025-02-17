import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-nz-form-field',
  template: `
    <nz-form-item>
      <ng-container *ngIf="props.label && props.hideLabel !== true">
        <nz-form-label [nzRequired]="props.required && props.hideRequiredMarker !== true" [nzFor]="id">
          {{ props.label }}
        </nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
})
export class FormlyWrapperFormField extends FieldWrapper {
  get errorState() {
    return this.showError ? 'error' : '';
  }
}
