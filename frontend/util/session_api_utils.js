export const register = user => {
  // let user1 = { user };
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/auth/register',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(user)
  });
};

export const login = user => {
  return $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/auth/login',
    data: { user }
  });
};

// export const logout = () => (
//   $.ajax({
//     method: 'DELETE',
//     url: 'api/auth/login'
//   })
// );