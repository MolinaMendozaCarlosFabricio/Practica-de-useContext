import { createContext } from 'react';
import './styles.css'
import Form from './components/Form';
export const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}