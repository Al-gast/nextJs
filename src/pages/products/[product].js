import fs from "fs/promises";
import path from "path";
import process from "process";

function ProductDetail(props) {
  const { loadedProduct } = props;
  console.log(loadedProduct);

  if (!loadedProduct) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const data = await fs.readFile(filePath);
  const productData = JSON.parse(data);

  return productData;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.product;
  const productData = await getData();

  const productDetail = productData.products.find(
    (product) => product.id === productId
  );

  if (!productDetail) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: productDetail,
    },
  };
}

export async function getStaticPaths() {
  const productData = await getData();

  const ids = productData.products.map((product) => product.id);
  const params = ids.map((id) => ({
    params: { product: id },
  }));

  return {
    paths: params,
    fallback: true,
  };
}

export default ProductDetail;
