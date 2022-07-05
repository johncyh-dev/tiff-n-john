import {createGlobalStyle} from 'styled-components';

import AlegreyaSansSC from './assets/fonts/AlegreyaSansSC-Regular.ttf';
import HomemadeApple from './assets/fonts/HomemadeApple-Regular.ttf';
import NotoSerif from './assets/fonts/NotoSerif-Regular.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Noto Serif';
        src: url(${NotoSerif}) format('truetype');
        font-weight: 400;
        font-style: normal
    }
    @font-face {
        font-family: 'Alegreya Sans SC';
        src: url(${AlegreyaSansSC}) format("truetype");
        font-weight: 400;
        font-style: normal
    }
    @font-face {
        font-family: 'Homemade Apple';
        src: url(${HomemadeApple}) format("truetype");
        font-weight: 400;
        font-style: normal
    }
`

export default FontStyles;
