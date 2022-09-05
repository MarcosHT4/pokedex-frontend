import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { PokeCard } from './PokeCard'
import {useEffect, useState} from 'react'
import pokeApi from '../config/pokeApi'

export const TrainerCard = ({trainer}) => {

    const [pokemon, setPokemon] = useState()

    const getPokemon = async (id) => {

        const response = await pokeApi.get(`pokemon/${id}`)
        console.log(response)
        setPokemon(response)
      
      }


    useEffect(() => {

        getPokemon(trainer.id_pokemon)

    },[trainer.id_pokemon])

  return (
    <Card sx={{maxWidth: 345}}>

        <CardActionArea>

            <CardContent>

            <Typography gutterBottom variant="h5" component="div">NOMBRE: {trainer.nombre}</Typography>
            <Typography gutterBottom variant="h5" component="div">POKEMON: {trainer.idPokemon}</Typography>
            <PokeCard image={pokemon?.data.sprites.front_default}
            name={pokemon?.data.name}
            stats={pokemon?.data.stats}></PokeCard>

            </CardContent>

        </CardActionArea>

    </Card>
  )
}
