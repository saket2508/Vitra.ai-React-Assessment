import styled from 'styled-components'

export const AppContainer = styled.div`
    margin: 0;
    padding: 1rem 1.5rem;
    max-width: 100%;
`

export const MainContainer = styled.div`
    max-width: 100%;
    margin: 0;
    padding: 0;
`

export const ParaContainer = styled.div`
    margin-top: 1.2rem;
`

export const TableLayout = styled.div`
    @media only screen and (max-width: 900px) {
        max-width: 100%;
        margin: 0;
        padding: 2rem 0rem; 
    }
    @media only screen and (min-width: 900px) {
        max-width: 900px;
        margin: 2rem auto; 
    }
`

export const SliderMenuContainer = styled.div`
    margin: 0rem;
    padding-top: 1.2rem;
    max-width: 100%;   
    display: flex;
    justify-content: center;
`

export const SliderContainer = styled.div`
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    border-color: #E4E4E7;
    padding: 1.5rem 1.5rem 0rem 1.5rem;
`

export const HeadingLarge = styled.h1`
    text-align: center;
    font-weight: 600;
    line-height: 1.2;
    font-size: 1.6rem;
    margin-top: 2rem;
`

export const HeadingSmall = styled.h3`
    font-size: 1.0rem;
    text-align: center;
    color: #52525B;
    font-weight: 500;
`

export const BodyText = styled.p`
    color: #52525B;
    text-align: center;
`

export const ItemGridContainer = styled.div`
    @media only screen and (max-width: 400px) {
        display: grid;
        max-width: 100%;
        grid-template-columns: repeat(1, 1fr);
        margin: 1.5rem 0.2rem;
    }
    @media only screen and (min-width: 400px) {
        display: grid;
        justify-items: center;
        max-width: 100%;
        grid-template-columns: repeat(1, 1fr);
        margin: 1.5rem 0.2rem;
    }
    @media only screen and (min-width: 600px) {
        display: grid;
        justify-items: center;
        max-width: 100%;
        grid-template-columns: repeat(2, 1fr);
        margin: 1.5rem 0.2rem;
    }
    @media only screen and (min-width: 900px){
        display: grid;
        max-width: 100%;
        grid-template-columns: repeat(3, 1fr);
        margin: 1.5rem 0.2rem;
    }
    @media only screen and (min-width: 1100px){
        display: grid;
        max-width: 100%;
        grid-template-columns: repeat(3, 1fr);
        margin: 1.5rem 0.2rem;
    }
`
export const CardWrapper = styled.div`
    @media only screen and (max-width: 400px) {
        overflow: hidden;
        padding: 0.7rem;
        min-width: 200px;
        max-width: 300px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        margin: 0.4rem;
    }
    @media only screen and (min-width: 400px) {
        overflow: hidden;
        padding: 0.7rem;
        width: 300px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        margin: 0.4rem;
    }
    @media only screen and (min-width: 600px) {
        overflow: hidden;
        padding: 0.7rem;
        max-width: 300px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        margin: 0.4rem;
    }
`
export const CardHeading = styled.h3`
    color: black;
    font-weight: 500;
`

export const AlbumCardList = styled.ul`
    text-align: center;
    list-style-type: none;
    margin: 0.2rem 0rem;
    padding: 0;
`

export const UserCardList = styled.ul`
    text-align: center;
    color: #52525B;
    list-style-type: none;
    margin: 0rem 0rem;
    padding: 0;
`