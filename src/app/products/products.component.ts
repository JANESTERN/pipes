import { Component } from '@angular/core';
import { products } from '../interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  date=new Date(19/2/2023)
  product:products[]=[
    {name:'mouse', 
    description:'this is a great mouse',
    image:'https://ae01.alicdn.com/kf/HTB1N54NKFXXXXbgXFXXq6xXFXXXX/New-arrival-High-quality-JWB80-large-gaming-mouse-7D-OPTICAL-compute-rmouse-Gamming-mice-DPI-3200dpi.jpg',
     price:'677', 
     category:'chair'},

    {name:'chair',
     description:'this is a great mouse',
     image:'https://content.la-z-boy.com/Images/product/category/white/large/235401.jpg', price:'300', 
     category:'mousehab'},

    {name:'mouse',
     description:'this is a great chair',
     image:'https://ae01.alicdn.com/kf/HTB1N54NKFXXXXbgXFXXq6xXFXXXX/New-arrival-High-quality-JWB80-large-gaming-mouse-7D-OPTICAL-compute-rmouse-Gamming-mice-DPI-3200dpi.jpg', 
     price:'300', 
     category:'mousehab'},

    {name:'mouse',
     description:'this is a great mouse',
     image:'https://ae01.alicdn.com/kf/HTB1N54NKFXXXXbgXFXXq6xXFXXXX/New-arrival-High-quality-JWB80-large-gaming-mouse-7D-OPTICAL-compute-rmouse-Gamming-mice-DPI-3200dpi.jpg',
      price:'300', 
      category:'mousehab'},

    {name:'mouse', 
    description:'this is a great mouse. it can work without a battery',
    image:'https://ae01.alicdn.com/kf/HTB1N54NKFXXXXbgXFXXq6xXFXXXX/New-arrival-High-quality-JWB80-large-gaming-mouse-7D-OPTICAL-compute-rmouse-Gamming-mice-DPI-3200dpi.jpg',
     price:'30000', 
     category:'car'},

    {name:'car',
     description:'this is a great car. its a very nice car ',
     image:'https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*', 
     price:'3000', 
     category:'mousehab'}
  ]

grestings=new Promise((resolve,reject)=>{
  setTimeout(() =>{
    resolve("Welcome all")
    
  },3000);
})


}
