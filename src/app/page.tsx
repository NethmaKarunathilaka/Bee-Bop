import Image from "next/image";
import styles from "./page.module.css";
import { ChatContainer } from "./components/chat-container";

export default function Home() {
  return (
      <div>
        <ChatContainer />
      </div>
  );
}
