

import './App.css';
import Navbar from './componentes/Navbar';
import React from 'react';
import SlideShow from './componentes/Slideshow';
import Product from './componentes/Product';

import image1 from './images/heer.jpeg';
import image2 from './images/hi.jpeg';
import image3 from './images/hello.jpeg';
import image7 from './images/p11.jpeg';

import image4 from './images/p4.jpeg';
import image5 from './images/p9.jpeg';
import image6 from './images/p10.jpeg';
import Footer from './componentes/Footer';

const App = () => {
  const images = [image1, image2, image3];
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "This is product 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image4
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image5
    },
    {
      id: 3,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 4,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 5,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 6,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 7,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 8,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 9,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 9,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 9,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 9,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 9,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 10,
      name: "Product 2",
      price: 29.99,
      description: "This is product 2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image7
    },
    {
      id: 11,
      name: "Product 3",
      price: 39.99,
      description: "This is product 3 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image6
    }
  ];
   // Function to chunk products into groups based on a specified size
  

  // Chunk the products into groups of 5

  
  return (
    <>
      <Navbar />
      <SlideShow images={images} interval={3000} />
      <div className="products-container">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      
      </div>
      <Footer/>
    </>
  );
};

export default App;
