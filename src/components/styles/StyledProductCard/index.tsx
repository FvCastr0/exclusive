import styled from "styled-components"

interface StyledProductCardProps {
    isSale?: boolean,
    isNew?: boolean
}

export const StyledProductCard = styled.article<StyledProductCardProps>`

    .productHeader {
        display: grid;
        grid-template-columns: 4.5rem 8rem 5.5rem;
        width: 270px;
        height: 250px;
        background-color: #F5F5F5;
        cursor: pointer;
    }
    
    .productHeader-Btn {
        display: flex;
        flex-direction: column;
        justify-content: left;
        margin-top: .4rem;
    }

    .productHeader-Btn button {
        border: none;
        background-color: transparent;
    }

    .texts {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .texts h1 {
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    .texts .prices {
        display: flex;
        font-size: 1.1rem;
        margin: 1rem 0;
    }

    .texts .prices h2 {
        margin-right: 1rem;
        color: #DB4444;
    }

    .texts .prices legend {
        text-decoration: line-through;
        color: #808080;
    }


    .stars {
        display: flex;
        align-items: center;
    }

    .stars img {
        margin-right: 1.25rem;
    }

    .stars legend {
        color: #808080;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 16px;
    }

    #productHeader-ImgProduct {
        display: flex;
        align-self: center;
        justify-self: center;
    }

    #promotion,
    #new {
        margin: .4rem;
        font-family: 'Poppins', sans-serif;
        padding: .4rem .9rem;
        border-radius: .4rem;
        color: #FFF;
        font-size: .8rem;
    }

    #promotion {
        display: ${props => props.isSale ? "block" : "none"};
        background-color: ${props => props.isSale ? "#DB4444" : "transparent"};
    }

    #new {
        display: ${props => props.isNew ? "block" : "none"};
        background-color: ${props => props.isNew ? "#00FF66" : "transparent"};
    }

    #btnAddCart {
            display: none;
    }

    .productHeader:hover #btnAddCart {
            display: block;
            position: absolute;
            width: 270px;
            bottom: 6.7rem;
            height: 2.5rem;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            border-radius: 0 0 .4rem .4rem;
            border: none;
            background-color: #000;
            color: #FFF;
            cursor: pointer;
    }

`