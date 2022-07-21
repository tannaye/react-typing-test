import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

//components
import CustomTextarea from "components/textInputs/CustomTextarea";
import PrimaryButton from "components/buttons/PrimaryButton";
import SecondaryButton from "components/buttons/SecondaryButton";
import CountDownTimer from "components/timer/CountDownTimer";
import SuccessModal from "./SuccessModal";

interface Props {
  username: string;
  paragraph: string;
  duration: { minutes: number; seconds: number };
  setDuration: (duration: { minutes: number; seconds: number }) => void;
  setActiveComponent: (component: string) => void;
}

const TypingTest: FC<Props> = (props): JSX.Element => {
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { paragraph, duration, username, setDuration, setActiveComponent } =
    props;
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [correctWords, setCorrectWords] = useState([]);
  const [incorrectWords, setIncorrectWords] = useState([]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (duration.minutes === 0 && duration.seconds === 0 && !testSubmitted) {
      console.log("test ended");
      handleSubmit(onSubmit)();
      setTestSubmitted(true);
    }
  });

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveComponent("settings");
  };

  const onSubmit = (data) => {
    let words = paragraph.split(" ");

    let answer = data.answer.split(" ");
    let correctWords_ = [];
    let incorrectWords_ = [];

    words.map((word: string, index: number) => {
      if (word === answer[index]) {
        // @ts-ignore
        correctWords_.push(word);
      } else {
        // @ts-ignore
        incorrectWords_.push(word);
      }
    });

    setCorrectWords(correctWords_);
    setIncorrectWords(incorrectWords_);
    setScore(correctWords_.length);
    setTotal(words.length);
    setModalIsOpen(true);
  };

  return (
    <>
      <div className="lg:px-20 mt-20 grid globe-bg">
        <div className="flex md:px-12 px-5">
          <div className="ml-auto">
            <CountDownTimer duration={duration} setDuration={setDuration} />
          </div>
        </div>
        <div className="lg:shadow-lg md:mx-5 md:p-12 rounded">
          <div className="content-scroll p-5">
            <p className="back-text text-lg unselectable">
              <i className="grey-text text-2xl ion-ios-quote mr-2" />
              {paragraph}
              <i className="grey-text text-2xl ion-ios-quote ml-2" />
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-16 p-5">
            <div className="">
              <CustomTextarea
                control={control}
                name={"answer"}
                id={"answer"}
                label={"Retype the paragraph above before the time runs out"}
                placeholder={"please retype the paragraph above here"}
                isRequired={true}
                errors={errors}
                isDisabled={
                  duration.minutes === 0 && duration.seconds === 0
                    ? true
                    : false
                }
                defaultValue={""}
              />
            </div>

            <div className="grid grid-cols-3 gap-10">
              {/* @ts-ignore */}
              <SecondaryButton
                title={"Cancel"}
                onClick={() => {
                  setActiveComponent("settings");
                }}
              />

              <div className=""></div>

              {/* @ts-ignore */}
              <PrimaryButton title={"Submits"} />
            </div>
          </form>
        </div>
      </div>

      <SuccessModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        score={score}
        total={total}
        username={username}
        correctWords={correctWords}
        incorrectWords={incorrectWords}
      />
    </>
  );
};

export default TypingTest;
