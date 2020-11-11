import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-ngselectpoc',
  templateUrl: './ngselectpoc.component.html',
  styleUrls: ['./ngselectpoc.component.css']
})
export class NgselectpocComponent implements OnInit {
  public selectedCar: number;
  public cars: any[];
  constructor() { }

  ngOnInit() {


  this.cars = [
          { id: 1, group: 'Select All',  name: 'Volvo', avatar: '../../../assets/connected.png' },
          { id: 2, name: 'Saab', group: 'Select All', avatar: '../../../assets/connected.png' },
          { id: 3, name: 'Opel', group: 'Select All', avatar: '../../../assets/connected.png' },
          { id: 4, name: 'Audi', group: 'Select All', avatar: '../../../assets/connected.png' },
      ];
  }

  setMultiSelectedItemColor() {
   const element = document.querySelectorAll('.custom3 .ng-value-label') as NodeListOf<HTMLElement>;
   // tslint:disable-next-line: prefer-for-of
   for (let i = 0; i < element.length; i++) {
    const ele = element[i];
    // ele.style.background = 'transparent';
    if (i === 0) { ele.style.background = 'lightblue'; } else if (i === 1)  { ele.style.background = 'orange'; }
    else if (i === 2)  { ele.style.background = 'pink'; }
}
}

onChange($event) {
  this.setMultiSelectedItemColor();
}

}
