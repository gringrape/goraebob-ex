import { gql, useQuery } from '@apollo/client';

import Restaurant, { RestaurantType } from './Restaurant';

const GET_RESTAURANTS = gql`
query {
  restaurants {
    id
    name
    likes
  }
}
`;

export default function Restaurants() {
  const { data, loading } = useQuery(GET_RESTAURANTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.restaurants.map((restaurant: RestaurantType) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ul>
  );
}
