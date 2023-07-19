function UserProfile(props) {
  return <h1>{props.username}</h1>;
}

export async function getServerSideProps(context) {
  console.log(context, "context");
  return {
    props: {
      username: "Ata",
    },
  };
}

export default UserProfile;
