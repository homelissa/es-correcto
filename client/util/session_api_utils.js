export const register = user => {
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
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(user)
    // data: { user }
  });
};


// export const logout = () => (
//   $.ajax({
//     method: 'DELETE',
//     url: 'api/auth/login'
//   })
// );


export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.responseText) {
    errorMessage = error.responseText;
  } else if (error.statusText) {
    errorMessage = error.statusText;
  } else {
    errorMessage = "Unsuccessful. Try again";
  }

  

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    // logoutUser();
  } else if (error.status === 400) {
    dispatch({
      type: type,
      payload: 'Please enter email,password,first name and last name'
    });
  }else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}
