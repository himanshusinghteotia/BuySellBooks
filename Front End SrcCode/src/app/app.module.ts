import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AdduserService } from './adduser.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CheckuserService } from './checkuser.service';
import { AddlistComponent } from './addlist/addlist.component';
import { ListingsComponent } from './listings/listings.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SinglelistComponent } from './singlelist/singlelist.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowmsgComponent } from './showmsg/showmsg.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchbookPipe, SearchauthorPipe, FilterbyPrice, FilterbyCondition } from './searchfilter.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Routing Array
const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "listings", component: ListingsComponent },
  { path: "listings/add", component: AddlistComponent },
  { path: "listings/:id", component: SinglelistComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "messages", component: ShowmsgComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddlistComponent,
    ListingsComponent,
    HeaderComponent,
    FooterComponent,
    SinglelistComponent,
    ShowmsgComponent,
    WishlistComponent,
    SearchbookPipe,
    SearchauthorPipe,
    FilterbyPrice,
    FilterbyCondition
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AdduserService, CheckuserService,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }