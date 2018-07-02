export const register = user => {
  return $.ajax({
    method: 'POST',
    url: 'https://kinder-canoe-23872.herokuapp.com/api/auth/register',
    dataType: 'html',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(user)
  });
};

export const login = user => {
  return $.ajax({
    type: 'POST',
    url: 'https://kinder-canoe-23872.herokuapp.com/api/auth/login',
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
      payload: 'This username and password combination is not correct.'
    });
    // logoutUser();
  } else if (error.status === 400) {
    dispatch({
      type: type,
      payload: 'Please enter valid username and password.'
    });
  }else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}
