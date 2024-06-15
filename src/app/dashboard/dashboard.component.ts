import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;
  icon = faTrash;
  iconEdit=faEdit;
  stock:undefined|string;
  router: any;
  constructor(private product: ProductService, private seller :SellerService) {}

  ngOnInit(): void {
    this.list();
  }
  exitDashboard() {
    // Close the seller's dashboard and navigate to another route or simply close the tab/window
    // You can also add any cleanup logic here if needed
    this.router.navigate(['/admin-dashboard']); // Navigate to the home route or any other route you prefer
  }
  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.product.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }
}
