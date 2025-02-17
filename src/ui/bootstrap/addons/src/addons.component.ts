import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.scss'],
})
export class FormlyWrapperAddons extends FieldWrapper {
  addonRightClick($event: any) {
    this.props.addonRight.onClick?.(this.field, $event);
  }

  addonLeftClick($event: any) {
    this.props.addonLeft.onClick?.(this.field, $event);
  }
}
