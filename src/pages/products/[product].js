import { useRouter } from 'next/router'
import React from 'react'

function ProductDetail() {
  
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail