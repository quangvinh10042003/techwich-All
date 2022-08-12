import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  listBackToSchool:any;
  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
    this.cateService.getAll().subscribe((data:any)=>{
      this.listBackToSchool = data.filter((item:any)=>{
        return item.backToSchool == true;
      })
    })
  }

}
