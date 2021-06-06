import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, Input, OnInit, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { SelectContainerComponent } from './select-container.component';

@Directive({
  selector: '[appSelect]',
})
export class SelectDirective implements OnInit {
  @Input()
  selectContainerReference!: SelectContainerComponent;

  private _overlayRef!: OverlayRef | null;

  constructor(
    private _overlay: Overlay,
    private _ngControl: NgControl,
    private _viewContainerRef: ViewContainerRef,
    private _host: ElementRef<HTMLInputElement>
  ) {
    // no implementation needed
  }
  ngOnInit(): void {
    fromEvent(this.origin, 'focus')
      //.pipe(untilDestroyed(this))
      .subscribe(() => {
        this.openDropdown();
      });
  }

  get origin() {
    return this._host.nativeElement;
  }

  openDropdown() {
    this._overlayRef = this._overlay.create({
      width: this.origin.offsetWidth,
      maxHeight: 40 * 3,
      backdropClass: '',
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      positionStrategy: this.getOverlayPosition(),
    });

    const template = new TemplatePortal(
      this.selectContainerReference.rootTemplate,
      this._viewContainerRef
    );
    this._overlayRef.attach(template);
  }

  private getOverlayPosition() {
    const positions = [
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' }
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' }
      ),
    ];

    return this._overlay
      .position()
      .flexibleConnectedTo(this.origin)
      .withPositions(positions)
      .withFlexibleDimensions(false)
      .withPush(false);
  }

  private close() {
    this._overlayRef?.detach();
    this._overlayRef = null;
  }
}