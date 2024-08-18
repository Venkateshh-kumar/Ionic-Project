import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProductsPage implements OnInit {

  products = [
    {
      name: 'Ascendion Family Culture',
      description: 'As we know we are living far away from our family. And we spent most of the time in company so, we need to suppose our colleagues and senior as our family.',
      image: 'assets/th.jpg' 
    },
    {
      name: 'Ascendion Working Culture',
      description: 'Ascendion working culture emphasizes innovation, collaboration, and employee well-being',
      image: 'assets/culture.jpg'
    },
    {
      name: 'Ascendion Gaming Hub',
      description: 'Employees can form teams to collaborate on gaming projects, from designing new games to developing game-related tools and technologies.',
      image: 'assets/gaming.jpg'
    },
    {
      name: 'Ascendion collab',
      description: 'Ascendion often collaborates with technology vendors and service providers to deliver integrated solutions. ',
      image: 'assets/collab.jpg'
    },
  ];

  selectedProductImage: string | null = null;


  constructor(private router: Router) { }

  ngOnInit() {}

  viewProduct(product: any) {
    this.selectedProductImage = product.image;
  }
  logout(){
    this.router.navigate(['/home'])
  }
}
