// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class VegetablesService {

//   constructor( private http: HttpClient) { 

//   }
 
//   categories=[
//     {src: 'assets/categories/Rectangle 17.png',
//       alt: 'Product 1',
//       name:'Vegetables',
//       products: [
//         { src: 'assets/Rectangle 3.png', 
//         alt: 'Product 1', 
//         name: 'onion',
//         price: 120,
//          count: 1, 
//          totalCost:120,
//          button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } },
//         { 
//           src: 'assets/Rectangle 32.jpg',
//           alt: 'Product 2',
//           name:'onion',
//           price: 12,
//           count: 1,
//           totalCost:12,
//           button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//         },{ 
//           src: 'assets/Rectangle 38.jpg',
//           alt: 'Product 2',
//           name:'onion',
//           price: 120,
//           count: 1,
//           totalCost:120,
//           button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//         }
      
//       ],
//     },
//     {
//       src:'assets/categories/Rectangle 19.png',
//       alt:'category2',
//       name:'Leafy Vegetable',
//       products:[
        
//           { 
//             src: 'assets/Rectangle 3.png',
//             alt: 'Product 1',
//             name:'onion',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 27.jpg',
//             alt: 'Product 2',
//             name:'tomato',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 32.jpg',
//             alt: 'Product 2',
//             name:'carrot',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 38.jpg',
//             alt: 'Product 2',
//             name:'brinjal',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           }
        
//         ]
      
//     },
//     {
//       src:'assets/categories/Group 43.png',
//       alt:'category3',
//       name:'Additionals',
//       products:[
//          { 
//             src: 'assets/Rectangle 3.png',
//             alt: 'Product 1',
//             name:'allu',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },
//           { 
//             src: 'assets/Rectangle 22.jpg',
//             alt: 'Product 2',
//             name:'cucumber',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },
//           { 
//             src: 'assets/Rectangle 22.jpg',
//             alt: 'Product 2',
//             name:'ladies finger',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },
//           { 
//             src: 'assets/Rectangle 26.jpg',
//             alt: 'Product 2',
//             name:'ginger',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 27.jpg',
//             alt: 'Product 2',
//             name:'blue',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 32.jpg',
//             alt: 'Product 2',
//             name:'chillles',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 38.jpg',
//             alt: 'Product 2',
//             name:'onion',
//             price: 120,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 39.jpg',
//             alt: 'Product 2',
//             name:'onion',
//             price: 19.99,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 27.jpg',
//             alt: 'Product 2',
//             name:'onion',
//             price: 19.99,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           },{ 
//             src: 'assets/Rectangle 32.jpg',
//             alt: 'Product 2',
//             name:'onion',
//             price: 19.99,
//             count: 1,
//             totalCost:120,
//             button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
//           }
        
        
//       ]
      
//     },
//     {
//       src:'assets/categories/Group 45.png',
//       alt:'category4',
//       name:'Fruits',
  
//     }
    
//   ]
//   productsItems:any=[]
//   isRemoved:boolean=false
//    updateButtonState(color: string, text: string,index:any): void {
//     this.productsItems.index.button.color=color;
//     this.productsItems.index.button.color=text;
//     if (this.isRemoved) {
//       this.productsItems.index.button.color='green';
//     this.productsItems.index.button.color='Add to Basket';
//     }
//   }
// }







import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {
  private apiUrl = 'https://kisanmart.onrender.com/inventory';

  categories: any[] = [
    {
     
    }
  ];
  productsItems: any[] = [];
  isRemoved: boolean = false;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) {
    this.assigningToCat()
  }

  // Method to fetch data from the API
  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Method to update button state
  updateButtonState(color: string, text: string, index: any): void {
    this.productsItems[index].button.color = color;
    this.productsItems[index].button.text = text;

    if (this.isRemoved) {
      this.productsItems[index].button.color = 'green';
      this.productsItems[index].button.text = 'Add to Basket';
    }
  }

  // Method to format API response into the expected structure
 // ...
 dummyCat:any=[]
 dummyCount=0;
formatData(response: any): void {
  
  console.log("result",response.items)
  const dumArry=response.items
  
    
   
    if (Array.isArray(dumArry)) {
      // Assuming response is an array of categories
      this.dummyCat = dumArry.map((category: any) => ({
       
        category: category.category,
        products:[
        {
        productId:category._id,
        src: `data:image/*;base64,${category.itemImage}`,
        alt: 'Product 1',
        itemname:category.itemname,
        costPerUnit: category.costPerUnit,
        count: 1,
        totalCost:category.costPerUnit,
        button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
      }]
      
      
      }));
      this.dummyCount++
      console.log("dummy",this.dummyCat,"dummyCount",this.dummyCount)
      
      this.productsItems = [].concat(...this.categories.map(category => category.products));
    } else {
    
      console.error('Invalid response format. Expected an array.', response);
    }
  
}

assigningToCat() {
  for (let index = 0; index < this.dummyCat.length; index++) {
    const categoryIndex = this.categories.findIndex(cat => cat.category === this.dummyCat[index].category);

    if (categoryIndex !== -1) {
      // Category is present in the categories array
      const category = this.categories[categoryIndex];
      const dummyProducts = this.dummyCat[index].products;

      if (!category.products) {
        // Ensure 'products' array exists in the category
        category.products = [];
      }

      // Push individual elements using spread operator if not already present
      for (const product of dummyProducts) {
        if (!category.products.some((p: { productId: any; }) => p.productId === product.productId)) {
          category.products.push(product);
        }
      }
    } else {
      // Category is not present in the categories array, add the entire category
      this.categories.push({ ...this.dummyCat[index] });
    }
  }

  console.log("this is pushed ", this.categories);
}


}



