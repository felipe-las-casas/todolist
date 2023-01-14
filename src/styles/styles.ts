import styled from "styled-components";

export const Button = styled.button`
    color: ${props => props.color};
    margin: 10px 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
`

export const Li = styled.li`
   font-size: 1.2rem;
   color: #aaa;
`

export const Title = styled.h1`
   font-size: 2rem;
   color: purple;
`

export const InputStyle = styled.input`
   padding: 5px;
   width: 230px;
   border: 2px solid #aaa;
   border-radius: 2px;
`

export const Content = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap');
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
    width: 300px;    
`