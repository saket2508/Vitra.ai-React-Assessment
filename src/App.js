import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AppContainer } from './styles/index'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Home from './pages/Home'
import Friends from './pages/Friends'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
  palette:{
    primary: {
      main: '#F87171',
    },
    secondary:{
      main: '#EF44441'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element = {<Home/>}/>
            <Route path="/friends" element = {<Friends/>}/>
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App;
