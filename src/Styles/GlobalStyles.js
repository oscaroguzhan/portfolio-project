import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        list-style-type:none;
        text-decoration:none;
    }
    :root {
        --primary-color:#007bff;
        --secondary-color:#6c757d;
        --bg-dark-color:#10121A;
        --bg-light-color:#F1F1F1;
        --border-color:#2e344e;
        --font-dark-color:#313131;
        --font-dark-second-color:#151515;
        --font-light-color:#a4acc4;
        --white:#fff;
        --sidebar-bg-color:#191D2B;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--bg-dark-color);
        color:(--white);
    }

    a {
        color:var(--white);
        font-size:1.3rem;
    }
    p{
        color:var(--white);
    }
`;

export default GlobalStyle;
