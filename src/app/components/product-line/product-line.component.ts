import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.css']
})
export class ProductLineComponent implements OnInit {

  @Input() productLine;

  baseUrl:string = "https://cms.insurancecustomerportal.com"
  logoUrl:string;
  companyLogoUrl: string;

  insurers: [];

  constructor() { }

  ngOnInit() {
    console.log(this.productLine.logo.url);
    this.logoUrl = `${this.baseUrl}${this.productLine.logo.url}`;
    console.log(this.logoUrl);
    this.insurers = this.productLine.insurers;


  }


  light(id) {
    //window.alert('Hello');
    console.log(id);
    document.getElementById(id).style.filter = "grayscale(0%)";
  }

  dark(id) {
    //window.alert('Hello');
    console.log(id);
    document.getElementById(id).style.filter = "grayscale(100%)";
  }
}
