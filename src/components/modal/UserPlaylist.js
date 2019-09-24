import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//COMPONENTS
import { Collections, CollectionGrid } from "../colections";
import { Card } from "../card";

export const UserPlayList = props => {
  return (
    <CollectionGrid>
      <Collections>
        {props.list &&
          props.list.items.map(
          <Card 
           Key={props.list.id}
           Title={props.list.name} 
          />
        )}
      </Collections>
    </CollectionGrid>
  );
};

const mapStateToProps = state => ({
  list: state.library,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPlayList);
