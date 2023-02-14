import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url(./font/Pretendard-Regular.otf);
        font-weight: 400;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url(./font/Pretendard-Medium.otf);
        font-weight: 500;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url(./font/Pretendard-SemiBold.otf);
        font-weight: 600;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url(./font/Pretendard-Bold.otf);
        font-weight: 700;
    }
     @font-face {
        font-family: 'Patua One';
        src: url(./font/PatuaOne-Regular.otf);
        font-weight: 400;
    }
    body{
        font-family: 'Pretendard';
        font-weight: 400;
        font-size:15px;
        color:#fff;
        line-height: 1.7;
    }
` 

export default Globalstyle