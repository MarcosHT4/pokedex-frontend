import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import pokeApi from '../../config/pokeApi'


const initialState = {

    isLoading: false,
    pokemon: {}

}

export const getPokemon = createAsyncThunk(

    'pokedex/getPokemon',

    async(id_pokemon) => {

        const res = await pokeApi.get(`pokemon/${id_pokemon}`)
        return res.data

    }

   

)

export const pokedexSlice = createSlice({

    name: 'pokedex',
    initialState,
    reducers: {
        isLoadingAction: (state) => {

            state.isLoading = !state.isLoading
        },
        pokemonAction: (state, action) => {

            state.pokemon = action.payload

        }

        
    },

    extraReducers: {

        [getPokemon.pending]: (state) => {

            

        },

        [getPokemon.fulfilled]: (state,action) => {

            state.pokemon = action.payload

        },

    }
})

export const {isLoadingAction, pokemonAction} = pokedexSlice.actions

export default pokedexSlice.reducer