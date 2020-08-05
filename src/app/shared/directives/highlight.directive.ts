import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() highlightColor = 'yellow'

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    console.log(this.el.nativeElement)
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
}
