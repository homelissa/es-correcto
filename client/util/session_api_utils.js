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


export function errorHandler(dispatch, error, type) {
  console.log('Error type: ', type);
  console.log(error);

  let errorMessage = error.response ? error.response.data : error;

   // NOT AUTHENTICATED ERROR
  if (error.status === 401 || error.response.status === 401) {
    errorMessage = 'You are not authorized to do this.';
    // return dispatch(logoutUser(errorMessage));
  }

  dispatch({
    type,
    payload: errorMessage,
  });
}
