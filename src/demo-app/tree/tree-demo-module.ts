/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {CdkTreeModule} from '@angular/cdk/tree';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTreeModule
} from '@angular/material';
import {TreeDemo} from './tree-demo';
import {ChecklistTreeDemo} from './checklist-tree-demo/checklist-tree-demo';
import {DynamicTreeDemo} from './dynamic-tree-demo/dynamic-tree-demo';
import {LoadmoreTreeDemo} from './loadmore-tree-demo/loadmore-tree-demo';

@NgModule({
  imports: [
    CdkTreeModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,
  ],
  declarations: [
    ChecklistTreeDemo,
    TreeDemo,
    DynamicTreeDemo,
    LoadmoreTreeDemo
  ],
})
export class TreeDemoModule {}
