import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectContainerComponent } from './select-container.component';
import { SelectTemplateContentDirective } from './select-content.directive';
import { SelectDirective } from './select.directive';
import { TreeViewComponent } from './tree-view/tree-view.component';

const publicApi = [
  SelectContainerComponent,
  SelectTemplateContentDirective,
  SelectDirective,
  TreeViewComponent,
];

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [publicApi],
  exports: [publicApi],
})
export class SelectModule {}
