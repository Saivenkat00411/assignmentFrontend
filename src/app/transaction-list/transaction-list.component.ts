import { Component, OnInit } from '@angular/core';
import { TRANSACTION_DATA } from './transaction-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../transaction-service';
@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [TransactionService],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent implements OnInit{

  transactionList:any = [];

  constructor(private service: TransactionService){

  }

  ngOnInit(): void {
    this.service.getTransactionList().subscribe({
      next: (value:any) => {
        this.transactionList = value;
      }
    })
  }

}
