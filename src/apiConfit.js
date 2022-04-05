let apiUrl;

const apiUrls = {
  production: "https://family-treebackend.herokuapp.com/",
  development: "http://localhost:3003",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
