import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// COMPONENTS
import Modal from "react-modal";
import { PlayList } from "./PlayList";
import { Button } from "../buttons";
import { UserPlayList } from "./UserPlaylist";
import { ButtonWrapper } from "./ButtonModalWrapper";
// ACTIONS
import Creators from "../../store/ducks/playlist";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "100%",
    backgroundColor: "#282828",
    border: "0px",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(12,9,8,0.8)"
  }
};

const ModalPlaylist = props => {
  const [play, setPlay] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { user, createPlaylist, getPlaylist, token } = props;

  function handleIsOpen() {
    setModalIsOpen(true);
  }

  function handleIsClose() {
    setModalIsOpen(false);
  }

  const handlePlayMessage = value => {
    if (value) setPlay(value);
  };

  const create = () => {
    if (user) {
      createPlaylist(user.id, token.token, play);
      // handleIsClose();
    }
  };

  useEffect(() => { if (user.data) getPlaylist(user.data.id) }, []);

  return (
    <>
      <Button styled={"btn--playlist"} onPress={handleIsOpen}>
        Nova Playlist
      </Button>
      <UserPlayList />
      {modalIsOpen === false ? (
        ""
      ) : (
          <>
            <div className="modalContent">
              <h1>Criar nova playlist</h1>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleIsClose}
              style={customStyles}
              contentLabel="PlayList"
            >
              <PlayList
                OnChange={handlePlayMessage}
              />
            </Modal>
            <ButtonWrapper execute={create} cancele={handleIsClose} />
          </>
        )}
    </>
  );
};

ModalPlaylist.propTypes = {
  onCreate: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.token,
  user: state.user.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Creators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPlaylist);
