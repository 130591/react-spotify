import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// ICONS
import disc from "../../imagens/tick.svg";
import actions from '../../store/ducks/sound';

export const Card = (props, styled) => {
  const { Image, Title, Artist, Key, songInfo, audioControl } = props;

  return (
    <article
      className={`card ${styled.card}`}
      key={Key + 1}
      onClick={() => audioControl(songInfo)}
    >
      <div className={`card-header ${styled.cardHead}`}>
        <img
          src={Image}
          className={`card-header__cover ${styled.cardCover}`}
          alt="artista"
        />
        <img
          src={disc}
          className={`card-header__disc ${styled.cardDisc}`}
          alt="artista"
        />
      </div>
      <h2 className={`card__title ${styled.cardTitle}`}>
        {Title}
        <span>{Artist}</span>
      </h2>
    </article>
  );
};

Card.propTypes = {
  Image: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Artist: PropTypes.string.isRequired,
  styled: PropTypes.string,
  Key: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return { player: state.player }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
