import cookie from 'react-cookies';
let token = cookie.load('token');

export const createProduct = (input_product) => {
  return $.ajax({
    method: 'POST',
    url: `https://kinder-canoe-23872.herokuapp.com/api/products/${input_product.name}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(input_product),
    headers: {"Authorization": token},
  });
};

export const fetchAllProducts = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://kinder-canoe-23872.herokuapp.com/api/products',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: {"Authorization": token},
  });

};

export const fetchOneProduct = (name) => {
  return $.ajax({
    method: 'GET',
    url: `https://kinder-canoe-23872.herokuapp.com/api/products/${name}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: {"Authorization": token},
  });
};

export const fetchUserProducts = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://kinder-canoe-23872.herokuapp.com/api/products/user',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const createUserProduct = userProduct => {
  return $.ajax({
    method: 'POST',
    url: 'https://kinder-canoe-23872.herokuapp.com/api/products',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(userProduct),
    headers: { "Authorization": token },
  });
};

// export const createProduct = (input_product) => {
//   return $.ajax({
//     method: 'POST',
//     url: `https://kinder-canoe-23872.herokuapp.com/api/products/${input_product.name}`,
//     dataType: 'html',
//     contentType: "application/json; charset=utf-8",
//     data: JSON.stringify(input_product),
//     headers: { "Authorization": token },
//   });
// };
