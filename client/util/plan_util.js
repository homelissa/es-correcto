import cookie from 'react-cookies';
let token = cookie.load('token');

export const createPlan = (plan) => {
  return $.ajax({
    type: 'POST',
    url: 'https://kinder-canoe-23872.herokuapp.com/api/plans',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(plan),
    headers: { "Authorization": token },
  });
};

export const fetchAllPlans = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://kinder-canoe-23872.herokuapp.com/api/plans',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};


export const fetchOnePlan = (id) => {
  return $.ajax({
    method: 'GET',
    // data: JSON.stringify(plan),
    url: `https://kinder-canoe-23872.herokuapp.com/api/plans/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const updatePlan = (plan) => {
  return $.ajax({
    method: 'PATCH',
    url: `https://kinder-canoe-23872.herokuapp.com/api/plans/${plan._id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(plan),
    headers: {
      "Authorization": token,
      "Access-Control-Allow-Headers": true
     },
  });
};

export const deletePlan = id => {
  return $.ajax({
    method: 'DELETE',
    url: `https://kinder-canoe-23872.herokuapp.com/api/plans/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: {
      "Authorization": token,
      "Access-Control-Allow-Headers": true
    }
  });
};
