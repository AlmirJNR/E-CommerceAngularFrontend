import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-digital-product',
  templateUrl: './digital-product.component.html',
  styleUrls: ['./digital-product.component.scss']
})
export class DigitalProductComponent implements OnInit {
  @Input() digitalProduct: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
