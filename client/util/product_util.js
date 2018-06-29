import cookie from 'react-cookies';

export const createProduct = (input_product) => {
  return $.ajax({
    method: 'POST',
    url: `http://localhost:3000/api/products/${input_product.name}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(input_product),
  });
};

let token = cookie.load('token');

export const fetchAllProducts = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/products',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: {"Authorization": token},
  });

};


export const fetchOneProduct = (name) => {
  return $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/products/${name}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",

  });
};
