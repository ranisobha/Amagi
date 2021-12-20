import styled from 'styled-components';


export const SectionContainer = styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:630px;
position:relative;
z-index:1

`

export const HeroBg = styled.div`
position:Absolute;
top:0;
right:0;
left:0;
bottom:0;
width:100%;
height:100%;
overflow:hidden

`

export const VideoBg= styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;

export const HeroContent=styled.div`
z-index:1;
position:absolute;
padding:8px 15px;
display:flex;
flex-direction:column;
align-items:center;
`
export const HeroH1=styled.h1`
color:#fff;
font-size:100px;
text-align:center;

`;

export const HeroP=styled.p`
align-items:center;
color:#fff;
font-size:35px;
`

