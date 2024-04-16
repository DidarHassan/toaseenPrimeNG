import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [
    MenubarModule,
    CommonModule
  ],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent implements OnInit {

  items: MenuItem[] | undefined;
  isShrink: boolean = false

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: '',
        routerLink: ['/home'] 
      },
      {
        label: 'Products',
        icon: '',
        routerLink: ['/'] 
      },
      {
        label: 'About Us',
        icon: '',
        routerLink: ['/'] 
      },
      {
        label: 'Contact Us',
        icon: '',
        routerLink: ['/'] 
      }
    ]
  }

  @HostListener('window:scroll', ['$event']) onScroll(){
    if(window.pageYOffset > 50){
      this.isShrink = true
    }else{
      this.isShrink = false
    }
  }

}
