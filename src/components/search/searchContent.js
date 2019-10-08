import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from 'prop-types';

import { Card } from "../card";
import { Navigation } from "../header";
import SearchOverview from "../tracks";
import { Collections, CollectionGrid } from "../colections";


const SearchWrapper = ({ albums, audioControl }) => {
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
      <SearchOverview audioControl={audioControl} />
      <Collections>
        <CollectionGrid>
          {albums && albums.items && albums.items.map(item =>
            <Card
              Key={item.id}
              Image={item.images[0].url}
              Title={item.name}
              Artist={item.artists[0].name}
              songInfo={item}
              audioControl={audioControl}
            />
          )}
        </CollectionGrid>
      </Collections>
    </>
  )
}

SearchWrapper.propTypes = {
  albums: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  albums: state.search.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWrapper);