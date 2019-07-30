import React from "react";

import { SearchOverview } from "../tracks";
import { Card } from "../card";
import { Collections, CollectionGrid } from "../colections";
import { Navigation } from "../header";

export const SearchWrapper = ({ data }) => {
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
          {!!data.albums.items[0] ? (
            <Collections title="Albums">
              <CollectionGrid>
                {data.albums.items.map(({ id, images, name, artists }) => (
                  <Card
                    Key={id}
                    Image={images[0].url}
                    Title={name}
                    Artist={artists[0].name}
                    styled={{
                      card: "card",
                      cardHead: "card-header",
                      cardCover: "card-header__cover",
                      cardDisc: "card-header__disc",
                      cardTitle: "card__title"
                    }}
                  />
                ))}
              </CollectionGrid>
            </Collections>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};
