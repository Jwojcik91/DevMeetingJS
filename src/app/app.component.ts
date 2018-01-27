import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Message } from './model/Message.model';
import { MessageRepositoryService } from './service/message-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  productList: Observable<any[]>;

  constructor(private messageRepo: MessageRepositoryService){
    this.productList = this.messageRepo.getProductList();

  }
}
