import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "john";
  person = {
    firstname: "barbara",
    lastname: "hellen",
    age: 50,
    address: "av 123"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
