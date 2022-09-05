import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import api from '../config/api'
import {useEffect, useState} from 'react'
import { TrainerCard } from './TrainerCard';

const validationSchema = yup.object({
  nombre: yup
    .string('Enter your name')
    .required('Name is required'),
  idPokemon: yup
    .string('Enter your id pokemon')
    .required('Id pokemon is required'),
});

export const TrainerForm = () => {

  const [trainers, setTrainers] = useState()

  const getTrainers = async () => {

    const data = await api.get('trainers')
    setTrainers(data)
    console.log(data)
                                                                                                                                                                
  }


  useEffect(() => {

    getTrainers()

  }, [])

  const postTrainer = async (body) => {

    const currentBody = {

      ...body,
      nombre: body.nombre

    }

    const result = await api.post('/trainer', currentBody)
    console.log(result)
    alert(JSON.stringify(result, null, 2))


  }

  const formik = useFormik({
    initialValues: {
      nombre: '',
      idPokemon: '',
      pokemonText: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      postTrainer(values)
      
    },
  });

  

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="nombre"
          name="nombre"
          label="Nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}
        />
        <TextField
          fullWidth
          id="idPokemon"
          name="idPokemon"
          label="ID Pokemon"
          value={formik.values.idPokemon}
          onChange={formik.handleChange}
          error={formik.touched.idPokemon && Boolean(formik.errors.idPokemon)}
          helperText={formik.touched.idPokemon && formik.errors.idPokemon}
        />
        <Button className="btn-login" color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>

    
      </form>

  
      

      {trainers?.data.trainers.map((trainer, index) => {

        return (
          <TrainerCard key={index} trainer={trainer}  />
        )

      })}
      
      
      
    </div>
  )
}
