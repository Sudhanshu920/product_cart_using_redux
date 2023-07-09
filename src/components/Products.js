import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from 'react';

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProduct(data);
    }
    fetchData();
    return () => {};
  }, []);
  return (
    <div>
      {product.map((item) => (
        <Card style={{ width: '18rem' }} id={item.id}>
          <Card.Img variant="top" src={item.image} style={{width:'150px'}}/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>{' '}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Products;
