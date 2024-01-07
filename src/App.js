import { ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/navbar";
import WeMovePage from "./components/weMoveScreen";
import { muiTheme } from './styles/muiMaterialTheme';
import EnrichMobilityPage from './components/enrichMobilityScreen';
import BookRide from './components/bookRideScreen';
import CarCarousel from './components/carCarouselScreen';
import BookChauffer from './components/bookChaufferScreen';
import OurValues from './components/ourValuesScreen';
import SpecialGuests from './components/specialGuestsScreen';
import FleeOptions from './components/fleeOptionsScreen';
import HappyToHear from './components/happyToHearScreen';
import Footer from './components/footer';

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Navbar />
      <WeMovePage />
      <EnrichMobilityPage />
      <BookRide />
      <CarCarousel />
      <BookChauffer />
      <OurValues />
      <SpecialGuests />
      <FleeOptions />
      <HappyToHear />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
