import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counter/counterSlice'
import { isLoadingAction } from '../store/pokedex/pokedexSlice'
import { pokemonAction } from '../store/pokedex/pokedexSlice'
import {getPokemon} from '../store/pokedex/pokedexSlice'
import {login} from '../store/auth/authThunk'
import { useEffect } from 'react'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const isLoading = useSelector((state) => state.pokedex.isLoading)
  const dispatch = useDispatch() 

  useEffect(() => {

    console.log(dispatch(getPokemon(1)))



  },[])

  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(login())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
        onClick = {() => dispatch(isLoadingAction())}>CHANGE LOADING</button>

        <button
        onClick={() => dispatch(pokemonAction({nombre: "Pikachu", id:25}))}>
            CHANGE POKEMON
        </button>

      
        
      </div>
    </div>
  )
}