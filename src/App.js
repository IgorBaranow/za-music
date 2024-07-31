import { ThemeProvider } from "styled-components";
import {
  Play,
  SkipLeft,
  SkipRight,
  Pause,
  Volume,
  Music,
  ArrowLeft,
  ArrowRight,
  Search,
  Heart,
  Users,
} from "components/ui/icons";

import {
  MainTitle,
  SectionTitle,
  SectionSubtitle,
  Text,
  Subtext,
  ButtonText,
} from "components/ui/Typography";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SectionSubtitle>Hello</SectionSubtitle>
      <Text>Hello</Text>
      <Subtext>Hello</Subtext>
      <ButtonText>Hello</ButtonText>
      <br />
      <Play />
      <SkipLeft />
      <SkipRight />
      <Pause />
      <Volume />
      <Music />
      <ArrowLeft />
      <ArrowRight />
      <Search />
      <Heart />
      <Users />
    </ThemeProvider>
  );
}

export default App;
