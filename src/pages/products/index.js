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
  console.log("Regenerate");
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const data = await fs.readFile(filePath);
  const productData = JSON.parse(data);

  if (productData.products.length === 0) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  return {
    props: {
      products: productData.products,
    },
    revalidate: 10
  };
}

export default Products;
