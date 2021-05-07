import  { useEffect, useContext, useState } from 'react'
import { ContextApp } from '../../App'

import Card from '../Card'



const CardList  = () => {
    const contextApp = useContext(ContextApp)
    const { peopleList, loading, error, searchText } = contextApp.peopleListState
    const [list, setList] = useState(peopleList)

    const filterData = (peopleList) => {
        setList(peopleList.filter(people => {
            return people.name.toUpperCase().includes(searchText)
          })
         )
    }

    useEffect(() => {
        filterData(peopleList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText, peopleList])

    return (
        <>
            { !error? 
                loading ? 
                    <div> Loading...</div> : 
                    list.map((people, index) => {
                        const {name, height, gender} = people
                        return <Card name={name} height={height} gender={gender} key={index} />
                    }) : 
                <div>{error}</div>        
            }          
        </>
    )
}

export default CardList
