async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store"
  });
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div style={{ padding: 40 }}>Товар не найден</div>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{product.name}</h1>
      
      <p><b>Цена:</b> {product.price} ₸</p>
      <p><b>Описание:</b> {product.description}</p>

      <p><b>Бренд:</b> {product.brand?.name}</p>
      <p><b>Модель:</b> {product.model?.name}</p>
      <p><b>Категория:</b> {product.category?.name}</p>

      <h3>Фотографии</h3>
      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {product.images?.map(img => (
          <img 
            key={img.id}
            src={img.url}
            alt="Фото"
            width="200"
            style={{ borderRadius: 10 }}
          />
        ))}
      </div>
    </div>
  );
}
