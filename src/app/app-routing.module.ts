import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { BecomeSellerComponent } from './become-seller/become-seller.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component:AboutUsComponent,
    path:'about-us',
  },
  {
    component:AdminDashboardComponent,
    path: 'admin-dashboard',
  }
 ,{
    component:AddproductComponent,
    path:'addproduct',
    canActivate:[AuthGuard]
  },{
    component:UpdateproductComponent,
    path:'updateproduct/:id',
    canActivate:[AuthGuard]
  },
  {
    component: SearchComponent,
    path:'search/:query'
  },{
    component:ProductDetailsComponent,
    path:'details/:productId'
  },{
    component:UserAuthComponent,
    path:'user-auth'
  },{
    component:CartPageComponent,
    path:'cart-page'
  },{
    component:CheckoutComponent,
    path:'checkout'
  },{
    component:MyOrdersComponent,
    path:'my-orders',
  },
  {
    component:BecomeSellerComponent,
    path:'become-seller'
  },
  {
    component:DashboardComponent,
    path:'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
