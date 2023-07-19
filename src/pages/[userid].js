function UserId(props) {
  return (
    <>
      <h1>ini adalah user id : {props.id}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.userid;

  return {
    props: {
      id: userId,
    },
  };
}

export default UserId;
