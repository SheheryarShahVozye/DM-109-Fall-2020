import { Component } from '@angular/core';
import {FwdalgoService} from 'src/app/fwdalgo.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DM-ALGO';
  Value = ''

  constructor( public fwdAlgo:FwdalgoService) {


   }
   construct()
   {
     debugger;
     this.Value = this.Value.replace(" ' "," ");
     this.fwdAlgo.jsCodeRemaped(this.Value)
   }
}

