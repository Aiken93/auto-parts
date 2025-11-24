async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  });
  return res.json();
}

export default async function CatalogPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: 20 }}>
      <h1>Каталог товаров</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px"
          }}>
            <h3>{product.name}</h3>
            <p><b>Цена:</b> {product.price} ₸</p>
            <p><b>Бренд:</b> {product.brand?.name}</p>
            <p><b>Модель:</b> {product.model?.name}</p>
            <p><b>Категория:</b> {product.category?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
