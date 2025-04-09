import './App.css';
import { ReactComponent as DayBackground } from './assets/day-bg.svg';
import { ReactComponent as NightBackground } from './assets/night-bg.svg';
import Todo from './components/Todo';
import { THEMES, useThemeContext } from './context/ThemeContext';

export default function App() {
  const { theme } = useThemeContext();
  return (
    <div className="h-screen w-full relative">
      {theme === THEMES.DARK ? (
        <NightBackground className="h-auto w-full bg-cover bg-center" />
      ) : (
        <DayBackground className="h-auto w-full bg-cover bg-center" />
      )}
      <Todo />
    </div>
  );
}
