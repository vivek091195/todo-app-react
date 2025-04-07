import './App.css';
import {ReactComponent as DayBackground} from "./assets/day-bg.svg";
import {ReactComponent as NightBackground} from "./assets/night-bg.svg";
import Todo from "./components/Todo";

export default function App() {
  return (
      <div className="h-screen w-full relative">
          <DayBackground className="h-auto w-full bg-cover bg-center" />
          <Todo />
      </div>
  )
}