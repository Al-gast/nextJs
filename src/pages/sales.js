import { useEffect, useState } from "react";
import styles from "../styles/sales.module.css"

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
      <ul className={styles["list-styling"]}>
        {data.map((sale) => (
          <li key={sale.id} className={styles.red}>
            {sale.username} - {sale.volume}
          </li>
        ))}
      </ul>
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
