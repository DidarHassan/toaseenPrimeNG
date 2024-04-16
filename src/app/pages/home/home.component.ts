import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { CardModule } from 'primeng/card';
import {HomeServicesService } from '../../core/services/home-services.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
  [
    CardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {

  private bannerService = inject(HomeServicesService)
  bannerSliders: any;
  getCategory: any;
  slidesPerView:number = 3;
  screenWidth!: number;

  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 0 && this.screenWidth <= 320){
      this.slidesPerView = 1;
    }
    else if(this.screenWidth >= 320 && this.screenWidth <= 480){
      this.slidesPerView = 1;
    }
    
   else if(this.screenWidth >= 480 && this.screenWidth <= 992){
      this.slidesPerView = 2;
    }
    else if(this.screenWidth >= 992 && this.screenWidth <= 1200){
      this.slidesPerView = 3;
    }
  }

  ngOnInit(): void {
    this.bannerSlider();
    this.getCate();
  }

  bannerSlider(){
    this.bannerService.bannerSliderGet().subscribe((res) =>{
      this.bannerSliders = res;
    })
  }
  getCate(){
    this.bannerService.categoryGet().subscribe({
      next: (getCategory : any) =>{
        this.getCategory = getCategory
      }
    })
  }

}
