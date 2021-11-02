import { Component, OnInit } from '@angular/core';
import { ApiDigitalProductService } from '../../services/api-digital-product.service';
import { ApiPhysicalProductService } from '../../services/api-physical-product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ApiDigitalProductService, ApiPhysicalProductService]
})
export class MainComponent {
  apiDigitalProduct: ApiDigitalProductService;
  apiPhysicalProduct: ApiPhysicalProductService;

  digitalProducts: any[] = [];
  physicalProducts: any[] = [];

  page: number = 24;
  itemsPerPage: number = 36;

  constructor(apiDigitalProductService: ApiDigitalProductService, apiPhysicalProductService: ApiPhysicalProductService) {
    this.apiDigitalProduct = apiDigitalProductService;
    this.apiPhysicalProduct = apiPhysicalProductService;
  }

  async ngOnInit () {
    this.digitalProducts = await this.apiDigitalProduct.getAllProducts(this.page, this.itemsPerPage);
    this.physicalProducts = await this.apiPhysicalProduct.getAllProducts(1, 4);

    let el: any = document.getElementById("myel");

    el.scrollLeft = 1330;
  }
}
