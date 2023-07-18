import fs from 'fs/promises'
import path from 'path'
import process from 'process';


function ProductDetail(props) {
  const {loadedProduct} = props
  console.log(loadedProduct);

  // if (!loadedProduct){
  //   return (
  //     <p>loading...</p>
  //   )
  // }

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  )
}

export async function getStaticProps(context){
  const {params} = context;

  const productId = params.product
  const filePath = path.join(process.cwd(), "data", "dummy.json")
  const data = await fs.readFile(filePath);
  const productData = JSON.parse(data)

  const productDetail = productData.products.find(product => product.id === productId);

  return {
    props: {
      loadedProduct: productDetail
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { product: "p1" } },
    ],
    fallback: 'blocking'
  }
}

export default ProductDetail