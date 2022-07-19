import { useState } from "react";

//components
import Settings from "components/home/Settings";
import TypingTest from "components/home/TypingTest";

const Home: React.FC = () => {
  const [paragraph, setParagraph] = useState("");
  const [activeComponent, setActiveComponent] = useState("settings");
  const [username, setUsername] = useState("");
  const [duration, setDuration] = useState({ minutes: 1, seconds: 0 });

  return (
    <div>
      {/* <h1 className="text-2xl font-bold">Welcome to Tannaye typing test</h1> */}
      {activeComponent === "settings" ? (
        <Settings
          setParagraph={setParagraph}
          setActiveComponent={setActiveComponent}
          setUsername={setUsername}
          setDuration={setDuration}
        />
      ) : (
        <TypingTest
          paragraph={paragraph}
          setActiveComponent={setActiveComponent}
          username={username}
          duration={duration}
          setDuration={setDuration}
        />
      )}
    </div>
  );
};
export default Home;
