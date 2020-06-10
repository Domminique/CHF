import { Component, OnInit } from '@angular/core';

export interface Specification {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  isHeading = true;

  displayedColumns: string[] = ['item', 'cost'];

  specifications: Specification[] = [
    {item: 'Bed ', cost: 5000},
    {item: 'Medication', cost: 13000},
    {item: 'Procedure', cost: 70000},
    
  ];

  constructor() { }

  getTotalCost() {
    return this.specifications.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }

}
