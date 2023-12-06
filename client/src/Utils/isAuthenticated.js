export const isAuthenticated = () => {
  const userdata = sessionStorage.getItem("isAuthenticated");
  let isAuthenticated;
  if (userdata) {
    isAuthenticated = JSON.parse(userdata);
  } else {
    isAuthenticated = false;
  }

  console.log(isAuthenticated);
  return isAuthenticated;
};
