import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[buttonEffect]'
})
export class ButtonEffectDirective implements AfterViewInit {
  @Input('ButtonEffect') defaultBg: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() hoverBg: string = 'linear-gradient(90deg, rgb(78, 6, 21) 0%, rgb(198, 26, 53) 100%)';
  @Input() defaultBoxShadow: string = 'none';
  @Input() hoverBoxShadow: string = '0 5px 9px 1px rgba(130, 19, 40, 0.5)';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateStyles(this.defaultBg, this.defaultBoxShadow);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.updateStyles(this.hoverBg, this.hoverBoxShadow);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.updateStyles(this.defaultBg, this.defaultBoxShadow);
  }

  private updateStyles(background: string, boxShadow: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background', background);
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', boxShadow);
  }
}
