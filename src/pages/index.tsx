import { trpc } from '~/utils/trpc';
import type { NextPageWithLayout } from './_app';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { LoadingIcon } from '~/components/Icons';
import { Restaurant } from '~/types/restaurant.type';
import * as React from 'react';
import { SearchInput } from '~/components/SearchInput';
import { CategoryList } from '~/components/CategoryList';
import { RestaurantList } from '~/components/RestaurantList';

const IndexPage: NextPageWithLayout = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const { ref: inViewRef, inView } = useInView();
  const [isNextPage, setIsNextPage] = useState(true);
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState<string>('ALL');
  const [categories, setCategories] = useState<Record<string, string>>({
    ALL: '전체',
  });
  const { data, fetchNextPage, hasNextPage, isFetching } =
    trpc.restaurant.getRestaurants.useInfiniteQuery(
      {
        limit: 5,
        search: searchQuery,
        categoryId: currentCategory,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      },
    );

  // Handle show Infinite loading at the end of the page
  useEffect(() => {
    setIsNextPage(hasNextPage);
  }, [hasNextPage]);

  // Apply new data to the state
  useEffect(() => {
    if (data) {
      const newData = data?.pages.flatMap(
        (page) => page.items,
      ) as unknown as Restaurant[];
      const currentRestaurants = [...restaurants];
      if (newData && newData.length > 0) {
        newData.forEach((item) => {
          const index = currentRestaurants.findIndex(
            (res) => item.id === res.id,
          );
          if (index >= 0) {
            currentRestaurants[index] = item;
          } else {
            currentRestaurants.push(item);
          }
          setCategories((prevState) => ({
            ...prevState,
            [item.category.id]: item.category.name,
          }));
        });
        setRestaurants(currentRestaurants);
      }
    }
  }, [isFetching]);

  // Handle call next page data when the last item is in view
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  // Handle when search input change
  useEffect(() => {
    setRestaurants([]);
    setSearchQuery(search);
  }, [search]);

  // Handle when category change
  useEffect(() => {
    setRestaurants([]);
  }, [currentCategory]);

  // Update only one item in the state
  const updateRestaurantFavourite = async (restaurant: Restaurant) => {
    const newRestaurants = [...restaurants];
    newRestaurants.forEach((item) => {
      if (item.id === restaurant.id) {
        item.isFavourite = restaurant.isFavourite;
      }
    });
    setRestaurants(newRestaurants);
  };

  return (
    <div className="flex flex-col bg-white py-8 font-pretendard">
      <SearchInput changeInput={setSearch} />
      <CategoryList categories={categories} currentCategory={currentCategory} onChangeCategory={setCurrentCategory} />
      <RestaurantList restaurants={restaurants} onAddRestaurantToFavourite={updateRestaurantFavourite} />
      {restaurants.length === 0 && !isFetching && (
        <div className="text-gray-500">
          입력하신 레스토랑이 없습니다. 새 키워드로 다시 시도해 주세요.
        </div>
      )}
      {isFetching && (
        <div className="flex justify-center">
          <div className="text-gray-500 justify-self-center">{LoadingIcon}</div>
        </div>
      )}
      {isNextPage && !isFetching && (
        <div className="text-center">
          <div role="status" ref={inViewRef}>
            {LoadingIcon}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
