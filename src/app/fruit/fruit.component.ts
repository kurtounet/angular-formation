import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
 imageSport:string[]=[
   'https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 ]
  image:string[]=[
    'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1663853293868-9729d25fdf86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  ];
  urlImage: string = this.image[0];

  afficher(id: number) {
    this.urlImage = this.image[id];     
  }
  scale() {
    this.urlImage = this.urlImage === this.image[0] ? this.image[1] : this.image[0];
  }
  selectImage(event: any){
    let value = event.target.value;
    if (value === "foot") {
      this.afficher(0);
    } else if (value === "natation") {
      this.afficher(1);
    } else if (value === "volley") {
      this.afficher(2);
    }  
  }
  /*
  urlIamge: string = '';
  id: string [] = ['glace', 'fruits', 'smoothie'];

  display(id: string) {
    if (id === 'glace') {
      this.urlIamge = 'https://media.istockphoto.com/id/1678949845/fr/photo/gros-plan-de-glace-italienne-avec-vue-sur-le-grand-canal-de-venise.webp?b=1&s=170667a&w=0&k=20&c=apin_9nqJ8HJM6-UCL9JMzHig-rdnvNvMmC1M8AYeNA=';
    } else if (id === 'fruits') { 
      this.urlIamge = 'https://plus.unsplash.com/premium_photo-1676642611795-9f1de2b99f83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D';
    } else if (id === 'smoothie') { 
      this.urlIamge = 'https://plus.unsplash.com/premium_photo-1663126827264-409d695e0be7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21vb3RoaWV8ZW58MHx8MHx8fDA%3D';
    }
  }
  */
}
