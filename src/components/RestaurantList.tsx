import { Fragment } from 'react';
import { RestaurantCard } from '~/components/RestaurantCard';
import { Restaurant } from '~/types/restaurant.type';
import * as React from 'react';
type RestaurantListProps = {
  restaurants: Restaurant[];
  onAddRestaurantToFavourite: (restaurant: Restaurant) => void;
}
export const RestaurantList = ({ restaurants, onAddRestaurantToFavourite }: RestaurantListProps) => (<div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:md:grid-cols-4 gap-4 mt-6 justify-stretch justify-items-center">
  <Fragment>
    {restaurants.length > 0 &&
      restaurants.map((item) => (
        <RestaurantCard
          key={item.id}
          onAddRestaurantToFavourite={onAddRestaurantToFavourite}
          restaurant={item as unknown as Restaurant}
        />
      ))}
  </Fragment>
</div>)