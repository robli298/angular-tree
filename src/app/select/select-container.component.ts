import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { SelectTemplateContentDirective } from './select-content.directive';


@Component({
  selector: 'app-select-container',
  template: `<ng-template #root
    ><div class="select-container">
      <ng-container
        *ngTemplateOutlet="selectTemplateContent.template"
      ></ng-container></div
  ></ng-template>`,
  styleUrls: ['./select-container.component.scss'],
  exportAs: 'appSelectContainer',
})
export class SelectContainerComponent {
  @ViewChild('root')
  rootTemplate!: TemplateRef<any>;

  @ContentChild(SelectTemplateContentDirective)
  selectTemplateContent!: SelectTemplateContentDirective;

  constructor() {
    // no implementation needed
  }
}
