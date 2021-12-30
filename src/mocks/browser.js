//browser.js is going to be the place where we initialize the actual
//our base url and we switch between json server “fake server.” on http://localhost:3000
// and the real server:
//http://tumblr4u.eastus.cloudapp.azure.com:5000
export default () => {
 
 
  return {
 
      baseURL: "http://tumblr4u.eastus.cloudapp.azure.com:5000",
     
 
  // baseURL: "http://localhost:3000"
  
 
  };
};
 
