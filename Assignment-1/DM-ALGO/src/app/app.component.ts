import { Component } from '@angular/core';
import {FwdalgoService} from 'src/app/fwdalgo.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DM-ALGO';

  constructor( public fwdAlgo:FwdalgoService) {


   }
   construct()
   {
     debugger;
     this.fwdAlgo.floydWarshallAlgorithm();
   }
}

