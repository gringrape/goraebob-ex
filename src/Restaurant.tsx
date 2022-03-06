import { gql, useSubscription } from '@apollo/client';

const SUBSCRIBE_LIKES = gql`
  subscription($id: String) {
    restaurantLiked(id: $id) {
      likes
    }
  }
`;

export type RestaurantType = {
  id: string;
  name: string;
  likes: number;
}

export default function Restaurant({ restaurant }: { restaurant: RestaurantType }) {
  const { id, name, likes } = restaurant;

  const { data } = useSubscription(SUBSCRIBE_LIKES, { variables: { id } });

  return (
    <li>
      <h3>{name}</h3>
      {data ? <p>{data.restaurantLiked.likes}</p> : <p>{likes}</p>}
      <button type="button">Like</button>
    </li>
  );
}
