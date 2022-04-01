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
        --border-color:#2e344e;
        --white:#fff;
        --sidebar-bg-color:#191D2B;
    }
    

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--bg-dark-color);
        color:(--white);
    }


    body::-webkit-scrollbar {
        width:10px;
        background-color:var(--border-color);
        border-radius:10px;  
    }
    body::-webkit-scrollbar-thumb {
        
        background-color:var(--secondary-color);
        border-radius:10px;  
    }
    
    a {
        color:var(--white);
        font-size:1.3rem;
    }
    p{
        color:var(--white);
    }
    h4 {
        color:var(--white);
        padding-bottom: .4rem;
    }

    // MEDIA QUERIES
    .hamburger-menu {
        position:absolute;
        top:5%;
        right:7%;
        z-index:99;
        color:var(--primary-color) !important;
        border-radius:10px;
        svg {
            color:var(--primary-color);
            font-size:3rem;
        }
    }
    .toogleHamburger {
        transform:translateX(0);
        z-index: 5;
    }
    @media screen and (min-width: 1120px) {
    .hamburger-menu {
        display:none;
    }
  }
    
`;

export default GlobalStyle;
