import cookie from 'react-cookies';
let token = cookie.load('token');

export const createPlan = (plan) => {
  return $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/plans',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(plan),
    headers: { "Authorization": token },
  });
};

export const fetchAllPlans = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/plans',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};


export const fetchOnePlan = (id) => {
  return $.ajax({
    method: 'GET',
    // data: JSON.stringify(plan),
    url: `http://localhost:3000/api/plans/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { "Authorization": token },
  });
};

export const updatePlan = (plan) => {
  return $.ajax({
    method: 'PATCH',
    url: `http://localhost:3000/api/plans/${plan._id}`,
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
    url: `http://localhost:3000/api/plans/${id}`,
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    headers: { 
      "Authorization": token,
      "Access-Control-Allow-Headers": true
    }
  });
};
