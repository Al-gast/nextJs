import fs from "fs/promises";
import path from "path";

function Products(props) {
  const { products } = props;
  return (
    <div>
      <h1>Ini adalah product page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const data = await fs.readFile(filePath);
  const productData = JSON.parse(data);
  return {
    props: {
      products: productData.products,
    },
  };
}

export default Products;
