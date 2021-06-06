import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TreeViewModel } from './select/tree-view/tree-view.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-tree';

  treeViewModel: TreeViewModel = {
    key: 1,
    parentKey: null,
    text: 'root',
    children: [
      {
        key: 2,
        parentKey: 1,
        text: 'Text 2',
        children: [
          {
            key: 5,
            parentKey: 2,
            text: 'Text 5',
            children: [
              {
                key: 6,
                parentKey: 5,
                text: 'Text 6',
                children: [],
              },
            ],
          },
        ],
      },
      {
        key: 3,
        parentKey: 1,
        text: 'Text 3',
        children: [],
      },
      {
        key: 4,
        parentKey: 1,
        text: 'Text 4',
        children: [],
      },
    ],
  };

  control = new FormControl();
}
