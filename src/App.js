import React, { useReducer, useEffect } from 'react'
import SearchForm from './components/SearchForm'
import CardList from './components/CardList'
import axios from 'axios';

const initialState = {
  peopleList: [],
  loading: true,
  error: '',
  searchText: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { 
              ...state,
              loading: false, 
              peopleList: action.payload.results,
              error: '',
              searchText: ''
      }
    case 'FETCH_ERROR':
      return {
          ...state,
          loading: true,
          peopleList: [],
          error: 'Lo sentimos, existen problemas para obtener la lista...',
          searchText: ''
      }
    case 'DELETE_PEOPLE': 
      return {
        ...state,
        loading: false,
        peopleList: state.peopleList.filter(people => action.payload !== people.name),
        error: '',
        searchText: ''
      }
    case 'SEARCH_PEOPLE': 
      return {
        ...state, searchText: action.payload.toUpperCase()
      }
    default:
      return state
  }
}

export const ContextApp = React.createContext()

const App = () => {

  const [listPeople, dispatch] = useReducer(reducer, initialState)

  const getPeople = () => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data})
    })
    .catch(error => {
        dispatch({type: 'FETCH_ERROR'})
    })
}

  useEffect(() => {
    getPeople()
  },[])


  return (
    <ContextApp.Provider value={{peopleListState: listPeople, peopleListDispatch: dispatch}}>
      <div style={{margin: '30px'}}>
        <SearchForm />
        <CardList />
      </div>
    </ContextApp.Provider>
  );
}

export default App;
