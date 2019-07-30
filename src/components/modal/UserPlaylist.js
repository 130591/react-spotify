import React from "react";

import { Card } from "../card";
import { Collections, CollectionGrid } from "../colections";

export const UserPlayList = props => {
  const { list } = props;
  return (
    <CollectionGrid>
      <Collections>
        {/* {
      list.items.map(
      <Card 
       Key={list.id}
       Title={list.name} 
      />
      )} */}
      </Collections>
    </CollectionGrid>
  );
};
