import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: any;
  totalCard: any = 0;
  nameAcc: any;
  allProduct: any = [];
  productList: any = [];
  keyword: string = '';
  constructor(private accSer: AccountService, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.nameAcc = localStorage.getItem('loginForm');
    this.nameAcc = JSON.parse(this.nameAcc);
    if(this.nameAcc){
      this.totalCard = this.nameAcc.cart.length;
    }
    this.accSer.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
    this.accSer.totalCard.subscribe(value => {
      this.totalCard = value;
    })
    this.getAllProduct();

    document.addEventListener('click', function handleClickOutsideBox(event: any) {
      let menuMobile = document.getElementById('menuMobile') as HTMLDivElement | null;
      let box = document.getElementById('modalMobile') as HTMLDivElement | null;
      let butOpenMenu = document.getElementById('butOpenMenu') as HTMLDivElement | null;
      if (!menuMobile?.contains(event.target) && !butOpenMenu?.contains(event.target)) {
        box?.classList.add("d-none")
      }
    });
    document.addEventListener('click', function handleClickOutsideBox(event: any) {
      let listSearch = document.getElementById('boxDetailSearched') as HTMLDivElement | null;
      if (!listSearch?.contains(event.target)) {
        listSearch?.classList.add("d-none")
      }
    });

  }
  getAllProduct() {
    this.productService.getAll().subscribe((data: any) => {
      this.allProduct = data;
    });
  }
  SortNewProduct(a: any, b: any) {
    let typeA = a.id;
    let typeB = b.id;
    let comparison = 0;
    if (typeA > typeB) {
      comparison = 1;
    } else if (typeA < typeB) {
      comparison = -1;
    }
    return comparison * -1;
  }
  openMenuMobile() {
    let menu = document.getElementById('modalMobile') as HTMLDivElement | null;
    menu?.classList.remove("d-none");
  }
  closeMenuMobile() {
    let menu = document.getElementById('modalMobile') as HTMLDivElement | null;
    menu?.classList.add("d-none");
  }
  signOut() {
    localStorage.removeItem('loginForm');
    this.accSer.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
  showBoxSearch() {
    let ip = document.getElementById('inputSearch') as HTMLInputElement | null;
    let box = document.getElementById('boxDetailSearched') as HTMLDivElement | null;
    if (ip?.value == '') {
      box?.classList.add('d-none');
    } else {
      box?.classList.remove('d-none');
    }
  }
  login(){
    this.accSer.isUserLoggedIn.next(false);
    localStorage.removeItem('loginForm');
    this.router.navigate(['login']);
  }
}
