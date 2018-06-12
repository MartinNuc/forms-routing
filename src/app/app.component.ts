import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  emailProp: string;
  usernameProp: string;
  name: string;

  constructor(xxx: ActivatedRoute, public cd: ChangeDetectorRef) {}

  click() {

  }
}
