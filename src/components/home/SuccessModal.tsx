import { FC } from "react";
import Modal from "react-modal";

//icons
import success from "assets/icons/success.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: " 1.5rem",
    transform: "translate(-50%, -50%)",
    width: "410px",
    borderRadius: "10px",
    border: "0.01px solid #888",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  score: number;
  total: number;
  username: string;
}

const SuccessModal: FC<Props> = (props: any): JSX.Element => {
  const { modalIsOpen, closeModal, score, total, username } = props;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="successful modal"
      >
        <div className="flex">
          <i
            className="ion-ios-close text-3xl ml-auto cursor-pointer"
            onClick={closeModal}
          ></i>
        </div>
        <div className=" flex flex-col">
          <img src={success} alt="" width={125} className="mx-auto" />

          <div className="text-center">
            <p className="text-2xl black-text font-semibold mb-3">Successful</p>
            <p className="text-sm grey-text font-medium mb-3">
              Hello {username}, thanks for completing the test successfully. You
              scored {score} out of {total} words.
            </p>
          </div>

          <div
            className="mx-auto bg-green py-3 px-5 rounded my-3 cursor-pointer"
            onClick={() => closeModal()}
          >
            <p className="text-sm font-semibold white-text">New Test</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SuccessModal;
