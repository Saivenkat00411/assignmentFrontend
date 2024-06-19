import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TransactionService } from '../transaction-service';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [RouterModule,CommonModule],
  providers: [TransactionService],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss'
})
export class TransactionDetailComponent {

  transactionDetail:any;
  transactionId = 0;

  constructor(private service: TransactionService, private activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(data =>{
      this.transactionId = parseInt(data["id"]);
      this.loadData();
    })
  }

  loadData(){
    this.service.getTransactionById(this.transactionId).subscribe({
      next: (value:any) =>{
        this.transactionDetail = value;
      }
    })
  }
}
