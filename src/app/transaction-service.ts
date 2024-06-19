import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TRANSACTION_DATA } from './transaction-list/transaction-data';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactionList(){
    return of(TRANSACTION_DATA);
  }

  getTransactionById(id:number){
    const row = TRANSACTION_DATA.find(row => row.id = id);
    return of(row);
  }
}
