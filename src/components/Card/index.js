import React, { useContext } from 'react'
import styled from 'styled-components' 
import { ContextApp } from '../../App'

const Container = styled.div({
    height: '5rem',
    width: '90%',
    borderRadius: '10px',
    padding: '1em',
    border: '1.5px solid SlateBlue',
    marginBottom: '1em',
    boxShadow: '7px 10px #E3E3E3'
});

const Title = styled.span({
    color: '#000',
    fontSize: '1.5rem',
    fontWeight: '600'
});

const Button = styled.button({
    color: '#FFF',
    borderRadius: '10px',
    padding: '0.25em 1em',
    border: '2px solid SlateBlue',
    marginRight: '15px',
    fontSize: '.67em',
    backgroundColor: 'SlateBlue',
    cursor: 'pointer',
    float: 'right'
});

const Element = styled.div({
    color: '#000',
    fontSize: '.8rem',
    fontWeight: '500',
    marginRight: '15px',
    paddingTop: '10px'
});


const Card  = ({name, height, gender}) => {

    const contextApp = useContext(ContextApp)
    return (
        <Container>
            <Title>{name}</Title>
            <Button onClick={()=>contextApp.peopleListDispatch({type: 'DELETE_PEOPLE', payload: name})}>Eliminar</Button>
            <Element>Height: {height}</Element>
            <Element>Gender: {gender}</Element>
        </Container>
    )
}

export default Card
