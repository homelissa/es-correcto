export const createProduct = (input_product) => {
  return $.ajax({
    method: 'POST',
    url: `http://localhost:3000/api/products/${input_product.name}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(input_product),
  });
};


export const fetchAllProducts = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/products',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
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
