import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TreeViewModel } from './tree-view.model';

@Component({
  selector: 'app-tree-view[treeViewModel]',
  template: `<ul *ngIf="treeViewModel.children">
    <li *ngFor="let node of treeViewModel.children">
      <ng-container
        *ngIf="template else default"
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="{ $implicit: node }"
      ></ng-container>
      <ng-template #default>
        {{node.text}}
      </ng-template>
      <app-tree-view
        *ngIf="node.children"
        [treeViewModel]="node"
        [template]="template"
      >
      </app-tree-view>
    </li>
  </ul> `,
  exportAs: 'appTreeViewComponent',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent implements OnInit, AfterViewInit {
  @Input()
  treeViewModel!: TreeViewModel;

  @Input()
  template!: TemplateRef<any>;

  constructor() {
    // no implementation needed
  }

  ngOnInit(): void {
    // no implementation needed
  }

  ngAfterViewInit(): void {
    // no implementation needed
  }
}
