import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: '/products', pathMatch: 'full' },
  
  { path: "products", children: [
    {path: "", component: ProductsComponent},
    { path: "add", component: AddProductComponent },
    { path: "edit/:id", component: EditProductComponent },
  ], canActivate: [AuthGuard]},
  { path: "register", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
