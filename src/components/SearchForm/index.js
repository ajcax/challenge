import React, { useContext, useState, useEffect } from 'react'
import { ContextApp } from '../../App'
import styled from 'styled-components'

const Input = styled.input({
    color: 'SlateBlue',
    height: '1.2rem',
    width: '8.4rem',
    borderRadius: '10px',
    padding: '0.25em 1em',
    border: '1.5px solid SlateBlue',
    marginRight: '15px',
    fontSize: '.67em',
    marginBottom: '1em'
});

const Button = styled.button({
    color: '#FFF',
    borderRadius: '10px',
    padding: '0.25em 1em',
    border: '2px solid SlateBlue',
    marginRight: '15px',
    fontSize: '.67em',
    backgroundColor: 'SlateBlue',
    cursor: 'pointer'
});


const SearchForm  = () => {
    const contextApp = useContext(ContextApp)
    const [search, setSearch]  = useState('')

    useEffect(() => {
        contextApp.peopleListDispatch({type: 'SEARCH_PEOPLE', payload: search})  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)    
        
    }

    return (
        <>
            <Input type={'text'} placeholder={'Ingrese un nombre a buscar'} onChange={(e) => handleSearch(e)} value={search} />
            <Button onClick={() =>  contextApp.peopleListDispatch({type: 'SEARCH_PEOPLE', payload: search})}>Search</Button>
        </>
    )
}

export default SearchForm
