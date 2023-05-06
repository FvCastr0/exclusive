import styled from "styled-components"
import Header from "components/screenComponent/Header"
import { CategorySubtitle } from "components/styles/CategorySubtitle"
import { CategoryTitle } from "components/styles/CategoryTitle"
import ProductCard from "components/screenComponent/ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from "axios"
import { useState, useEffect } from 'react'

const StyledHome = styled.div`
    .cards:nth-child(3) {
        margin-left: 4rem;
    }
`

export default function Home() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:4000/productsOnSale",
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => {
            setProduct(res.data)
        });
    }, [])


    return (
        <StyledHome>
            <Header />

            <section >
                <CategorySubtitle>Today's</CategorySubtitle>
                <CategoryTitle>Flash Sales</CategoryTitle>

                <div className="cards">
                    <Swiper
                        spaceBetween={90}
                        slidesPerView={4}
                        onSwiper={(swiper) => swiper}
                    >
                        {
                            product.map(({ title, price, rePrice, id, productImg, numberStars, stars, discount }) => <SwiperSlide>
                                <ProductCard isSale={true}
                                    key={id}
                                    title={title}
                                    productImg={productImg}
                                    numberStars={numberStars}
                                    price={price}
                                    stars={stars}
                                    discount={discount}
                                    rePrice={rePrice}
                                />
                            </SwiperSlide>)

                        }
                    </Swiper>
                </div>
            </section>
        </StyledHome >
    )
}