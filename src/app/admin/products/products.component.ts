import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  product = {
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 99.99,
    imageUrl: 'https://th.bing.com/th/id/R.fb63d2e91c44dc000334b7efdfe7812b?rik=g9fksRTphKlSEw&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fLenovo_77231EU_H405_Desktop_Computer_749608.jpg&ehk=Kc3ixiW9suJquz0wumyZRh90Jcw4HKqwIvYwXCsq0cw%3d&risl=&pid=ImgRaw&r=0'
  };

}
