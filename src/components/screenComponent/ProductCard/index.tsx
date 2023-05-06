import wishlist from './img/wishlistNoSelect.svg'
import see from './img/see.svg'
import { StyledProductCard } from "components/styles/StyledProductCard";
import { EProductCardSale } from "interface/EProductCardSale";

export default function ProductCard({
    discount, productImg, title, price, rePrice, stars, numberStars, isSale, isNew
}:
    EProductCardSale): JSX.Element {
    const urlImgProduct = `img/products/${productImg}.png`
    var urlImgStars = ''

    if (stars === 1) {
        urlImgStars = 'img/star/oneStar.png'
    }
    else if (stars === 2) {
        urlImgStars = 'img/star/twoStars.png'
    }
    else if (stars === 3) {
        urlImgStars = 'img/star/threeStars.png'
    }
    else if (stars === 4) {
        urlImgStars = 'img/star/fourStars.png'
    }
    else if (stars === 5) {
        urlImgStars = 'img/star/fiveStars.png'
    }
    else if (stars > 5) {
        throw Error('The maxium stars number are 5')
    }

    return (
        <StyledProductCard isSale={isSale} isNew={isNew}>
            <div className="productHeader">

                <div className="productHeaderItemText">
                    <p id="promotion">-{discount}%</p>
                    <p id="new">NEW</p>
                </div>


                <img src={urlImgProduct} alt="Product" id="productHeader-ImgProduct" />

                <div className="productHeader-Btn">
                    <button><img src={wishlist} alt="Add Wishlist" id="wishlist" /></button>
                    <button><img src={see} alt="See Product" /></button>
                </div>
                <button id="btnAddCart">Add To Cart</button>

            </div>

            <div className="texts">
                <h1>{title}</h1>

                <div className="prices">
                    <h2>${price}</h2>
                    <legend id="reprice">${rePrice}</legend>
                </div>
            </div>

            <div className="stars">
                <img src={urlImgStars} alt="avaliation" />
                <legend>({numberStars})</legend>
            </div>

        </StyledProductCard >
    )
}     