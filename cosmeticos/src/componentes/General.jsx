import styled from 'styled-components';

const Boton = styled.button`
    background: #79248b;
    color: white; 
    padding: 0.5rem 1rem; /* py-2 px-4 */
    border: none;
    border-radius: 0.375rem; 
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        background: #553c9a; 
        color: #fff;
    }

    margin-top: 2rem; 
`;

const Parrafo = styled.p`
    background: purple;
    font-family: Arial, sans-serif;
    color: white;

    &:hover {
        background: #44a559;
        color: red;
    }
`;

const Card = styled.div`
    transition: 0.3s ease all;
    background: #740938;

    &:hover {
        background: #44a559;
        color: #fff;
    }
`;

export { Parrafo, Boton, Card };