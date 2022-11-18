// const data = {
//     products: [
//       {
//         id: '1',
//         name: 'MacBook',
//         price: 1400,
//         image: 'https://picsum.photos/id/180/2400/1600',
//       },
//       {
//         id: '2',
//         name: 'Old Car',
//         price: 2400,
//         image: 'https://picsum.photos/id/111/4400/2656',
//       },
//       {
//         id: '3',
//         name: 'W Shoes',
//         price: 1000,
//         image: 'https://picsum.photos/id/21/3008/2008',
//       },
//     ],

import ProductService from "./services/ProductService";

//   };

  const fetchData = async () => {
    try{
      const response = await ProductService.getProducts(); 
      const json = JSON.stringify(response.data);

      return json;
    }
    catch (error) {
      console.log(error);
    }
    
 }


 const data = {
  products: fetchData()
 }

 
export default data;