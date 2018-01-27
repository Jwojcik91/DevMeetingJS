import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ProductRepositoryService {

  constructor(private db: AngularFireDatabase) { 

  }

  public getProductList(){
    return this.db.list('messages').valueChanges();
  }

}
