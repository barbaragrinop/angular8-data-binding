import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName: string = "My Button";
  i = 0;
  valor = 0;
  spinnerMode = "determinate";
  btnEnable = true;
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log("click");
  }

  inc(){
    this.i++;
    this.buttonName = "It was clicked "  + this.i + " times";
    this.valor = this.i;

  }
   
  disabled(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    this.valor = 0;
    this.i = 0;
    setTimeout(()=> {
      this.btnEnable = true,
      this.spinnerMode = "determinate";      
    }, 3000);
  }

}
