import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    font-family: 'Poppins', sans-serif;


    nav {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border-right: 0.1px solid #00000049;
        padding-top: 2rem;
        z-index: 5;
        margin: 0 10rem;
        
    }

    #bannerNoText,
    #iphone {
        display: none;
    }

    .categories {
        color: #000;
        font-weight: 600;
        text-decoration: none; 
        margin-right: 5rem;
        line-height: 2.5;
        z-index: 5;
    }

    #bannerText {
        width: auto;
        margin-top: 2.5rem;
        border-radius: 0.4rem;
    }


    @media (min-width: 1920px) {
        nav {
            margin: 0 15rem;
        }
    }

    @media (max-width: 1440px) {
        nav {
            margin: 0 6rem;
        }

        #bannerText {
            width: 60%;
        }
    }

    @media (max-width: 1200px) {
        nav {
            margin: 0 4rem;
        }

        #bannerText {
            width: 45rem;
        }
    }

    @media (max-width: 1080px) {
        nav {
            margin: 0 2rem;
        }

        #bannerText {
            width: 40rem;
        }
    }

    @media (max-width: 940px) {
        .categories {
            color: white;
            line-height: 2;
            font-weight: lighter;
        }

        nav {
            border: none;
        }

        #bannerText {
            display:none;
        }

        #bannerNoText {
            display: flex;
            position: absolute;
            width: 100%;
            height:56vh;
            z-index: 0;
        }
    }
    
    @media (max-width: 650px) {

        .categories {
            color: #000
        }

        nav {
            margin: 0 auto;
            padding-left: 3rem;
            align-items: center;
        }

        #bannerNoText {
            display:none;
        }
    }
`

