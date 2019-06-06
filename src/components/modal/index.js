import React, { useState } from "react";

import Modal from "react-modal";
import { Button } from "../../components/buttons/index";

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

export const ModalPlaylist = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleIsOpen() {
    setModalIsOpen(true);
  }

  function handleIsClose() {
    setModalIsOpen(false);
    console.log("fechou");
  }

  return (
    <>
      <Button styled={"btn--playlist"} onPress={handleIsOpen}>
        Nova Playlist
      </Button>
      {modalIsOpen === false ? (
        ''
      ) : (
        <>
        <div className="modalContent">
          <h1>Criar nova playlist</h1>
        </div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={modalIsOpen}
          onRequestClose={handleIsClose}
          style={customStyles}
          contentLabel="PlayList"
        >
          <div className="contentPlay">
            <span>Nome da Playlist</span>
            <input
              type="text"
              className="input-play"
              placeholder="Comece a escrever..."
            />
          </div>
        </Modal>
        <div className="buttonContainer">
            <Button styled={"btn--cancele"} onPress={handleIsClose}>
              cancelar
            </Button>
            <Button styled={"btn--playlist"}>Criar</Button>
        </div>
        </>
      )}
    </>
  );
};
