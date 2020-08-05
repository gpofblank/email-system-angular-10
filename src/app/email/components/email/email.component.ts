import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../../models/email';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  @Input() email: Email;

  @Output() remove = new EventEmitter();
  @Output() seen = new EventEmitter()

  constructor(private _location: Location) {}

  ngOnInit(): void { }

  public onRemove() {
    this.remove.emit(this.email.id);
  }

  public onSeen() {
    this.seen.emit(this.email)
  }


}
