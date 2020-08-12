import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-popup-loader',
  templateUrl: './popup-loader.component.html',
  styleUrls: ['./popup-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
