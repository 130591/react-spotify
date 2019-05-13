import React, { Component } from "react";

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

export class ModalPlaylist extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <>
        <Button styled={"btn--playlist"} onClick={this.openModal}>
          Nova Playlist
        </Button>
        {this.state.modalIsOpen ? (
          <div className="modalContent">
            <h1>Criar nova playlist</h1>
          </div>
        ) : (
          ""
        )}
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
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

        {this.state.modalIsOpen ? (
          <div className="buttonContainer">
            <Button styled={"btn--cancele"} onClick={this.closeModal}>
              cancelar
            </Button>
            <Button styled={"btn--playlist"}>Criar</Button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
