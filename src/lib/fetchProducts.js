export async function fetchProducts(){
    const res = await fetch("http://localhost:3000/products.json", {
        cache: "force-cache"
      });
      return res.json();
}