import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-nz-radio',
  template: `
    <nz-radio-group [formControl]="formControl" (ngModelChange)="props.change && props.change(field, $event)">
      <label
        nz-radio
        *ngFor="let option of props.options | formlySelectOptions: field | async"
        [nzValue]="option.value"
      >
        {{ option.label }}
      </label>
    </nz-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType<FieldTypeConfig> {}
