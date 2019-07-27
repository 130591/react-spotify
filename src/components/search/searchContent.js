import React from "react";

import { SearchOverview } from "../tracks";
import { Card } from "../card";
import { Collections, CollectionGrid } from "../colections";
import { Navigation } from "../header";

export const SearchWrapper = ({ data }) => {
  if (data) {
    console.log(data.items);
  }
  return (
    <>
      <Navigation
        content={[
          "Principais Resultados",
          "Artistas",
          "Músicas",
          "Albums",
          "Playlist",
          "Podcasts"
        ]}
        styled={"navigation--black"}
      />
      {!!data ? (
        <>
          <SearchOverview overdata={data} />
          <Collections title="Albums">
            <CollectionGrid>
              {/* {data.items.map((id, images,) => (
            <Card
              Key={id}
              Image={imagens[0].url}
              styled={{
                card: "card",
                cardHead: "card-header",
                cardCover: "card-header__cover",
                cardDisc: "card-header__disc",
                cardTitle: "card__title"
              }}
            />
          ))} */}
            </CollectionGrid>
          </Collections>
        </>
      ) : (
        ""
      )}
    </>
  );
};
