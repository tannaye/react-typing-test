import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import randomParagraph from "random-paragraph";

//components
import CustomInput from "components/textInputs/CustomInput";
import CustomTextarea from "components/textInputs/CustomTextarea";
import CustomRadio from "components/selectInputs/CustomRadio";
import PrimaryButton from "components/buttons/PrimaryButton";

//images
import TypingPana from "assets/images/typing-pana.svg";

interface Props {
  setParagraph: (paragraph: string) => void;
  setActiveComponent: (component: string) => void;
  setUsername: (username: string) => void;
  setDuration: (duration: { minutes: number; seconds: number }) => void;
}

const Settings: FC<Props> = (props): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { setParagraph, setActiveComponent, setUsername, setDuration } = props;
  const [timer, setTimer] = useState(1);

  const [testType, setTestType] = useState("random");

  const onSubmit = (data) => {
    setUsername(data.username);
    setDuration({ minutes: timer, seconds: 0 });
    setActiveComponent("typingTest");

    if (testType === "customized") {
      setParagraph(data.paragraph);
    } else {
      setParagraph(randomParagraph({ sentences: 2 * timer }));
    }
  };

  return (
    <>
      <div className="container mx-auto h-fit w-full max-width">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-40 items-center">
          <div className="lg:block hidden">
            <img
              src={TypingPana}
              alt="settings-illustration"
              className="settings-illustration"
              width={600}
            />
          </div>
          <div className="shadow-lg md:mx-5 md:p-12 p-1 rounded">
            <h3 className="text-lg black-text-2 font-bold">
              Please customize your typing test
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
              <div className="">
                <CustomInput
                  control={control}
                  name={"username"}
                  id={"username"}
                  label={"Username"}
                  placeholder={"Enter your username"}
                  isRequired={true}
                  type={"text"}
                  errors={errors}
                  isDisabled={false}
                  defaultValue={""}
                />
              </div>

              <div className=" mb-2">
                <p className="text-sm black-text font-medium mb-2">
                  Select Test Duration
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="">
                    <CustomRadio
                      selected={timer === 1}
                      label={"1 minute"}
                      onClick={() => setTimer(1)}
                    />
                  </div>

                  <div className="">
                    <CustomRadio
                      selected={timer === 2}
                      label={"2 minutes"}
                      onClick={() => setTimer(2)}
                    />
                  </div>

                  <div className="">
                    <CustomRadio
                      selected={timer === 5}
                      label={"5 minutes"}
                      onClick={() => setTimer(5)}
                    />
                  </div>
                </div>
              </div>

              <div className=" mb-2">
                <p className="text-sm black-text font-medium mb-2">
                  What kind of paragraph would you like?
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="">
                    <CustomRadio
                      selected={testType === "random"}
                      label={"Random"}
                      onClick={() => setTestType("random")}
                    />
                  </div>

                  <div className="">
                    <CustomRadio
                      selected={testType === "customized"}
                      label={"Cutomized"}
                      onClick={() => setTestType("customized")}
                    />
                  </div>
                </div>
              </div>

              {testType === "customized" ? (
                <>
                  <div className="">
                    <CustomTextarea
                      control={control}
                      name={"paragraph"}
                      id={"paragraph"}
                      label={"Enter your test paragraph"}
                      placeholder={"please enter your test paragraph"}
                      isRequired={true}
                      errors={errors}
                      isDisabled={false}
                      defaultValue={""}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="">
                {/* @ts-ignore */}
                <PrimaryButton title={"submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
