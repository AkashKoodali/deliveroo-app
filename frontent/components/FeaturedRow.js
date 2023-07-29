import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestuarantCard from "./RestuarantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]

      `,
        { id: id }
      )
      .then((data) => {
        console.log(data);
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Reasturant cards */}
        {/* {restaurants?.map((restaurant) => {
          <RestuarantCard
            key={restaurant?._id}
            id={restaurant?._id}
            title={restaurant?.name}
            imgUrl={restaurant?.image}
            rating={restaurant?.rating}
            genre={restaurant?.type?.name}
            address={restaurant?.address}
            short_description={restaurant?.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />;
        })} */}

        {/* <RestuarantCard
          id={123}
          title="Yo! Sushi"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestuarantCard
          id={123}
          title="Yo! Sushi"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestuarantCard
          id={123}
          title="Yo! Sushi"
          imgUrl="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
