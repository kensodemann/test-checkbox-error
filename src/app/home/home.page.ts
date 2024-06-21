import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonNote, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {
  @ViewChild('plainCB') plainCB!: ElementRef;
  @ViewChild('ionicCB') ionicCB!: any;
  @ViewChild('plainCBError') plainCBError!: ElementRef;
  @ViewChild('ionicCBError') ionicCBError!: any;

  ionicIsChecked: Boolean = false;
  htmlIsChecked: Boolean = false;

  constructor() {}

  ionicCbChanged() {
    const input = this.ionicCB.el.shadowRoot?.querySelector("input[type='checkbox']");
    input.setAttribute('aria-invalid', this.ionicIsChecked);
    if (this.ionicIsChecked) {
      this.ionicCBError.el.classList.remove('hiddenmessage');
    } else {
      this.ionicCBError.el.classList.add('hiddenmessage');
    }
  }

  htmlCbChanged() {
    this.plainCB.nativeElement.setAttribute('aria-invalid', this.htmlIsChecked);
    if (this.htmlIsChecked) {
      this.plainCBError.nativeElement.classList.remove('hiddenmessage');
    } else {
      this.plainCBError.nativeElement.classList.add('hiddenmessage');
    }
  }
}
