import { ThisReceiver } from '@angular/compiler';

import { Component, OnInit } from '@angular/core';

 

@Component({

  selector: 'app-calculator',

  templateUrl: './calculator.component.html',

  styleUrls: ['./calculator.component.css']

})

export class CalculatorComponent implements OnInit {

  value1: any

  value2: any

  sum: any

  operator: string = ''

  numb: any = ''

  eq: string = ''

  numView(no: any) {

    if (this.operator == "") {

      this.value1 = no

    }

    else {

      this.value2 = no

 

    }

  }

  setOperator(opr: any) {

 

    if (opr == "=") {

      this.eq = opr

    if(opr=="+")

    this.operator=="+"

       

        this.sum = parseInt(this.value1) + parseInt(this.value2)

        console.log("sum",this.sum)

      }

 

       if (this.operator ==  "-") {

        

        this.sum = parseInt(this.value1)-parseInt(this.value2)

         }

  if (this.operator == "*") {

 

        this.sum = parseInt(this.value1) * parseInt(this.value2)

      }

 

        if (this.operator == "/") {

        this.sum = parseInt(this.value1) / parseInt(this.value2)

      }

    

    

    else {

      this.operator = opr

 

    }

  }

 

  constructor() { }

 

  setvalue1(event: any) {

    console.log("function invoked...", event)

    this.value1 = (event.target as HTMLInputElement).value

 

  }

  setvalue2(event: any) {

    this.value2 = (event.target as HTMLInputElement).value

  }

  setvalue3(event: any) {

    this.sum = (event.target as HTMLInputElement).value

  }

  ngOnInit(): void {

  }

}

 

  