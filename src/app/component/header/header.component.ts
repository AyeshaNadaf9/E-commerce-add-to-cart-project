import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public totalItemNumber: number = 0;
  public searchKeyTerm:any="";

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      this.totalItemNumber = res.length;
    });
  }

  searchEvent(event:any){
    this.searchKeyTerm =(event?.target as HTMLInputElement).value;
   this.cartService.search.next(this.searchKeyTerm)
  }
}
