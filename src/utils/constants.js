// localhost url
// const BASE_URL = "http://localhost:3002";

// production url
// const BASE_URL = "/api";


const BASE_URL = location.hostname === "localhost" ? "http://localhost:3002/api" : "/api";

export default BASE_URL;
