import Image from "next/image";

function UserProfile(props) {
  return (
    <>
      <h1>{props.username}</h1>
      <img src="/image/code.jpg" height={200} />
      <Image src="/image/code.jpg" height={200} width={300} />
    </>
  );
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
