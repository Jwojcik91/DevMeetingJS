import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Product } from './model/Product.model';
import { ProductRepositoryService } from './service/product-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  productList: Observable<any[]>;

  constructor(private productRepo: ProductRepositoryService){
    this.productList = this.productRepo.getProductList();
    console.log(this.productList);
  }
}
