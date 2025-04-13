import './App.css';
import { ReactComponent as DayBackground } from './assets/day-bg.svg';
import { ReactComponent as NightBackground } from './assets/night-bg.svg';
import Todo from './components/Todo';
import { THEMES, useThemeContext } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';

export default function App() {
  const { theme } = useThemeContext();
  return (
    <div className="bg-cover bg-center">
      {theme === THEMES.DARK ? (
        <NightBackground className="h-auto w-auto md:w-full" />
      ) : (
        <DayBackground className="h-auto w-auto md:w-full" />
      )}
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}
