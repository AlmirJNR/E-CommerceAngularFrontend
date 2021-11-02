import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-physical-product',
  templateUrl: './physical-product.component.html',
  styleUrls: ['./physical-product.component.scss']
})
export class PhysicalProductComponent implements OnInit {
  @Input() physicalProduct: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
