import { Link } from "react-router-dom";
import styled from "styled-components";
import desktopBack from "../../images/backgroundDesktop.png"

export const Orange = styled.span`
color: #F25137;
`

export const Container = styled.div`
display: flex;
height: 100%;
`

export const RegisterDiv = styled.aside`
display: flex;
width: 550px;
height: auto;
background-image:linear-gradient(to left, rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)), url(${desktopBack});
justify-content: center;
align-items: center;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 400px;
height: 609px;
background: #FFFFFF;
padding: 40px;
`

export const GoogleBtn = styled.button`
display: flex;
width: 150px;
height: 40px;
margin: 0 auto;
justify-content: center;
align-items: center;
gap: 16px;

background: #F5F7FA;
box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
border: none;


font-weight: 700;
font-size: 16px;
line-height: calc(38/16);

text-align: center;

color: #707375;
`

export const Label = styled.label`
font-family: 'Montserrat';
font-weight: 500;
font-size: 14px;
line-height: calc(17/14);
margin-top: 28px;

color: #898F9F;
`

export const Input = styled.input`
width: 320px;
height: 42px;
padding: 13px 0 12px 12px;
margin-top: 8px;

background: #F5F7FA;
border: none;
box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
`

export const SignInBtn = styled.button`
width: 320px;
height: 60px;
margin-top: 32px;

font-family: 'Montserrat';
font-weight: 600;
font-size: 16px;
line-height: calc(20/16);
border: none;

text-align: center;
background: #FF6B08;
color: #FFFFFF;
`

export const LogText = styled.p`
font-family: 'Montserrat';
font-weight: 500;
font-size: 13px;
line-height: 16px;
/* identical to box height */

text-align: center;

color: #898F9F;

`

export const LogLink = styled(Link)`
font-family: 'Montserrat';
font-weight: 500;
font-size: 13px;
line-height: calc(16/13);
text-align: center;
margin-top: 20px;

text-decoration-line: underline;

color: #FF6B08;

`

export const MainDiv = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
width: 397px;
margin: 0;
align-items: center;
justify-content: center;
`

export const Box = styled.div`

`

export const Title = styled.p`
font-family: 'Abril Fatface';
font-size: 34px;
line-height: calc(38/34);
margin: 0;
text-align: center;

color: #242A37;
`

export const UlTitle = styled.p`
font-family: 'Montserrat';
font-weight: 500;
font-size: 20px;
line-height: calc(38/20);
margin: 48px 0 0 0;
text-align: start;


color: #242A37;
`

export const UlTitleSecond = styled.p`
font-family: 'Montserrat';
font-weight: 500;
font-size: 20px;
line-height: calc(38/20);
margin: 0;
margin-top: 32px;

color: #242A37;
`

export const LiStyled = styled.li`
display: flex;
gap: 12px;
align-items: center;
margin: 12px 0 0 0;


`


export const LiText = styled.p`
font-family: 'Montserrat';
font-weight: 500;
font-size: 14px;
line-height: calc(17/14);
margin: 0;

color: #898F9F;
`

