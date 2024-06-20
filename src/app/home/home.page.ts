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

  isError: Boolean = false;

  constructor() {}

  errorChanged() {
    this.plainCB.nativeElement.setAttribute('aria-invalid', this.isError);
    const input = this.ionicCB.elementRef.nativeElement.shadowRoot?.querySelector("input[type='checkbox']");
    input.setAttribute('aria-invalid', this.isError);
  }
}
