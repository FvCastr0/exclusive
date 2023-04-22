import styled from 'styled-components'
import banner from './img/banner.png'
import bannerNoText from './img/bannerNoText.png'
import { Link } from 'react-router-dom'
import { StyledHeader } from '../../styles/StyledHeader'

export default function Header() {
    return (
        <StyledHeader>
            <img src={bannerNoText} alt="banner iphone 14" id='bannerNoText' />

            <nav>
                <Link to="/" className='categories' >Woman's Fashion</Link>
                <Link to="/" className='categories' >Men's Fashion</Link>
                <Link to="/" className='categories' >Eletronics</Link>
                <Link to="/" className='categories' >Home & Lifestyle</Link>
                <Link to="/" className='categories' >Medicine</Link>
                <Link to="/" className='categories' >Sports & Outdoor</Link>
                <Link to="/" className='categories' >Baby's & Toys</Link>
                <Link to="/" className='categories' >Groceries & Pets</Link>
                <Link to="/" className='categories' >Health & Beauty</Link>
            </nav>

            <img src={banner} alt="banner iphone 14" id='bannerText' />
        </StyledHeader>
    )
}

