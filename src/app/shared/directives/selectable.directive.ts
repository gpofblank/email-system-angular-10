import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSelectable]',
})
export class SelectableDirective {
  @Input() selectableColor = 'yellow'
  @Input() selectableText = 'I was added by selectable directive';

  private childNode: HTMLElement;


  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    const element = this.el.nativeElement;
    element.style.border = '1px solid';
    element.style.borderColor = this.selectableColor;

    this.childNode = document.createElement('div');
    this.childNode.innerHTML = this.selectableText;

    element.appendChild(this.childNode);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = 'none';
    this.childNode.parentElement.removeChild(this.childNode)

  }
}
