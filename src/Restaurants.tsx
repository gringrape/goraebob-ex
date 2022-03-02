import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
query {
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
  }
}
`;

export default function Restaurants() {
  const { data, loading } = useQuery(GET_DOGS);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <ul>
      <li>
        <h3>고래식당</h3>
      </li>
      <li>
        <h3>순살돈가스</h3>
      </li>
    </ul>
  );
}
