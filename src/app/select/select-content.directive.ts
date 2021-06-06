import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[selectTemplateContent]',
})
export class SelectTemplateContentDirective {
  constructor(public template: TemplateRef<any>) {
    // no implementation needed
  }
}
