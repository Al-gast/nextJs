import { useEffect, useState } from "react";

function SalesPage(props) {
  const [data, setData] = useState(props.sales);
  useEffect(() => {
    fetch(
      "https://next-backend-a55dd-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const salesInArray = [];
        for (const key in data) {
          salesInArray.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setData(salesInArray);
      });
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data.map((sale) => (
        <ul key={sale.id}>
          {sale.username} - {sale.volume}
        </ul>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://next-backend-a55dd-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  );
  const data = await response.json();
  const salesInArray = [];
  for (const key in data) {
    salesInArray.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return { props: { sales: salesInArray }, revalidate: 10 };
}

export default SalesPage;
