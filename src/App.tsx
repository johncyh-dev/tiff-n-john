import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import main from './assets/images/main.webp';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #000000;
    }
    body {
        margin: 0;
        background-color: #000000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const AppContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const HighlightContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    font-family: 'Noto Serif';
`;

const Row = styled.div<{
    paddingTop?: string,
    paddingLeft?: string,
    paddingBottom?: string,
    paddingRight?: string,
    direction? : string
}>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    padding-top: ${({ paddingTop }) => paddingTop || '0'};
    padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
    padding-bottom: ${({ paddingBottom }) => paddingBottom || '0'};
    padding-right: ${({ paddingRight }) => paddingRight || '0'};
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: content-box;
`;

const Name = styled.div<{ alignSelf?: string, leftOrRight?: string }>`
    position: absolute;
    font-size: 2em;
    color: #DDDDDD;
    align-self: ${({ alignSelf }) => alignSelf || 'auto'};
    transform: ${({ leftOrRight }) => leftOrRight === 'left' ? 'translateX(-25%)' : 'translateX(40%)'};
    left: ${({ leftOrRight }) => leftOrRight === 'right' ? '50%' : 'unset'};
    right: ${({ leftOrRight }) => leftOrRight === 'left' ? '50%' : 'unset'};
`;

const DecorativeText = styled.div`
    color: #555555;
    font-family: 'Alegreya Sans SC';
    font-size: 4em;
    align-self: baseline;
`;

const Motto = styled.div<{ font?: string, leftOrRight?: string }>`
    width: 100%;
    font-family: ${({ font }) => font || 'Homemade Apple'};
    padding-left: 10%;
    padding-right: 10%;
    font-size: 2em;
    color: #CCCCCC;
    box-sizing: border-box;
    text-align: ${({ leftOrRight }) => leftOrRight === 'left' 
                                            ? 'left' 
                                            : leftOrRight === 'right' 
                                                ? 'right'
                                                : 'center'};
    line-height: 1em;
    opacity: 30%;
`;

const Reminder = styled.div<{ font?: string, size?: string }>`
    width: 100%;
    font-family: ${({ font }) => font || 'Noto Serif'};
    font-size: ${({ size }) => size || '2em'};
    text-align: center;
    color: #FFFFFF;
`;

const ActionButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ActionButtonLabel = styled.div`
    font-size: 2em;
    font-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #555555;
`;

const MainImage = styled.div`
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function App() {
    return (
    <AppContainer className='App'>
        <GlobalStyle />
        <MainImage style={{ backgroundImage: `url(${main})`}} />
        <HighlightContainer>
        <Row paddingTop='80px'>
            <Name alignSelf='flex-start' leftOrRight='left'>Tiffany</Name>
            <DecorativeText>&</DecorativeText>
            <Name alignSelf='flex-end' leftOrRight='right'>John</Name>
        </Row>
        <Row paddingTop='80px' direction='column'>
            <Reminder font='Alegreya Sans SC'>
                Save the date
            </Reminder>
            <Reminder size='3em'>
                01.10.2022
            </Reminder>
        </Row>
        <Row paddingTop='25vh' direction='column'>
            <Motto leftOrRight='left'>
                all ends well 
            </Motto>
            <Motto leftOrRight='right'>
                that ends well
            </Motto>
        </Row>
        </HighlightContainer>
    </AppContainer>
    );
}

export default App;
