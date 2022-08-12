import { Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  list:any;
  constructor(private categorySer:CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categorySer.getAll().subscribe((data) => {
      this.list = data;
    })
  }
  navigateToShop(id:number){
    document.documentElement.scrollTop = 0;
    this.router.navigate([`/filtershop/${id}`]);
  }
}
