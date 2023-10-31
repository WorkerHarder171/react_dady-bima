import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateProduct from './CreateProduct';

describe('CreateProduct Component', () => {
  it('should render Product Name input and display user input', () => {
    render(<CreateProduct />);
    const productNameInput = screen.getByLabelText('Product Name');

    fireEvent.change(productNameInput, { target: { value: 'Test Product' } });

    expect(productNameInput).toBeInTheDocument();
    expect(productNameInput.value).toBe('Test Product');
  });

  it('should render and select Product Category', () => {
    render(<CreateProduct />);
    const productCategorySelect = screen.getByLabelText('Product Category');

    fireEvent.change(productCategorySelect, { target: { value: 'volvo' } });

    expect(productCategorySelect).toBeInTheDocument();
    expect(productCategorySelect.value).toBe('volvo');
  });

  it('should upload an image', () => {
    render(<CreateProduct />);
    const imageInput = screen.getByLabelText('Image Of Product');

    fireEvent.change(imageInput, { target: { files: [new File(['dummy'], 'dummy.jpg', { type: 'image/jpg' })] } });

    expect(imageInput).toBeInTheDocument();
    expect(imageInput.files[0].name).toBe('dummy.jpg');
  });

  it('should select Product Freshness', () => {
    render(<CreateProduct />);
    const brandNewRadio = screen.getByLabelText('Brand New');
    const secondHandRadio = screen.getByLabelText('Second Hand');

    fireEvent.click(secondHandRadio);

    expect(brandNewRadio).not.toBeChecked();
    expect(secondHandRadio).toBeChecked();
  });

  it('should enter Additional Description', () => {
    render(<CreateProduct />);
    const additionalDescInput = screen.getByLabelText('Additional Description');

    fireEvent.change(additionalDescInput, { target: { value: 'This is a test description.' } });

    expect(additionalDescInput).toBeInTheDocument();
    expect(additionalDescInput.value).toBe('This is a test description.');
  });

  it('should enter Product Price', () => {
    render(<CreateProduct />);
    const productPriceInput = screen.getByLabelText('Product Price');

    fireEvent.change(productPriceInput, { target: { value: '10' } });

    expect(productPriceInput).toBeInTheDocument();
    expect(productPriceInput.value).toBe('10');
  });
});
