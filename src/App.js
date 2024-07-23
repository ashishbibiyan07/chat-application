import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
const App = () => {
  if (!localStorage.getItem("userName")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="
de04efba-efd7-41ea-9e12-b72f85205d83"
      userName={localStorage.getItem("userName")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
