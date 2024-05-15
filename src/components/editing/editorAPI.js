export function fetchAllCustomProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8080/customProducts");
    const data = await response.json();
    resolve({ data });
  });
}

export function createCustomProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/customProducts/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCustomProductsById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8080/customProducts/" + id);
    const data = await response.json();
    console.log("product by ID", data);
    resolve({ data });
  });
}
