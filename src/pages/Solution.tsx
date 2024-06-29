import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'; 
import products from '../data/mockData';

interface Product {
  code: string;
  name: string;
  price: number;
  supplyPrice: number;
  vat: number;
  shippingFee: number;
  incomingLocation: string;
  outgoingLocation: string;
  stockQuantity: number;
  material: string;
  manufacturingCountry: string;
}

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  grid-column: span 2;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Solution: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    incomingLocation: '',
    outgoingLocation: '',
    stockQuantity: '',
    manufacturingCountry: '',
    material: '',
    code: '',
    name: '',
    price: '',
    supplyPrice: '',
    vat: '',
    shippingFee: '',

  });
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Handle change in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchCriteria(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const { incomingLocation, manufacturingCountry, material,code, name, price, supplyPrice, vat, shippingFee, stockQuantity,outgoingLocation /* 다른 검색 기준들 */ } = searchCriteria;

    const filtered = products.filter((product: Product) => (
        (incomingLocation === '' || product.incomingLocation.toLowerCase().includes(incomingLocation.toLowerCase().trim())) &&
        (outgoingLocation === '' || product.outgoingLocation.toLowerCase().includes(outgoingLocation.toLowerCase().trim())) &&
        (stockQuantity === '' || product.stockQuantity.toString() === stockQuantity.trim()) &&
        (manufacturingCountry === '' || product.manufacturingCountry.toLowerCase().includes(manufacturingCountry.toLowerCase().trim())) &&
        (material === '' || product.material.toLowerCase().includes(material.toLowerCase().trim())) &&
        (code === '' || product.code.toLowerCase().includes(code.toLowerCase().trim())) &&
        (name === '' || product.name.toLowerCase().includes(name.toLowerCase().trim())) &&
        (price === '' || product.price.toString() === price.trim()) &&
        (supplyPrice === '' || product.supplyPrice.toString() === supplyPrice.trim()) &&
        (vat === '' || product.vat.toString() === vat.trim()) &&
        (shippingFee === '' || product.shippingFee.toString() === shippingFee.trim())
      ));
  
      setFilteredProducts(filtered);
    };

  return (
    <Container>
      <h1>Product Information Search</h1>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          name="incomingLocation"
          placeholder="Incoming Location"
          value={searchCriteria.incomingLocation}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="outgoingLocation"
          placeholder="Outgoing Location"
          value={searchCriteria.outgoingLocation}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="stockQuantity"
          placeholder="Stock Quantity"
          value={searchCriteria.stockQuantity}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="manufacturingCountry"
          placeholder="Manufacturing Country"
          value={searchCriteria.manufacturingCountry}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="material"
          placeholder="Material"
          value={searchCriteria.material}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="code"
          placeholder="Product Code"
          value={searchCriteria.code}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="name"
          placeholder="Product Name"
          value={searchCriteria.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="price"
          placeholder="Price"
          value={searchCriteria.price}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="supplyPrice"
          placeholder="Supply Price"
          value={searchCriteria.supplyPrice}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="vat"
          placeholder="VAT"
          value={searchCriteria.vat}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="shippingFee"
          placeholder="Shipping Fee"
          value={searchCriteria.shippingFee}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <Th>Product Code</Th>
            <Th>Product Name</Th>
            <Th>Price</Th>
            <Th>Supply Price</Th>
            <Th>VAT</Th>
            <Th>Shipping Fee</Th>
            <Th>Incoming Location</Th>
            <Th>Outgoing Location</Th>
            <Th>Stock Quantity</Th>
            <Th>Material</Th>
            <Th>Manufacturing Country</Th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product: Product) => (
            <tr key={product.code}>
              <Td>{product.code}</Td>
              <Td>{product.name}</Td>
              <Td>{product.price}</Td>
              <Td>{product.supplyPrice}</Td>
              <Td>{product.vat}</Td>
              <Td>{product.shippingFee}</Td>
              <Td>{product.incomingLocation}</Td>
              <Td>{product.outgoingLocation}</Td>
              <Td>{product.stockQuantity}</Td>
              <Td>{product.material}</Td>
              <Td>{product.manufacturingCountry}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Solution;
