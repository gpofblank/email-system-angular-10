import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { SelectableDirective } from './directives/selectable.directive';



@NgModule({
  declarations: [HighlightDirective, SelectableDirective],
  exports: [HighlightDirective, SelectableDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
