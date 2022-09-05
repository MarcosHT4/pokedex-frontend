import React, {useEffect, useState} from 'react'
import api from '../config/api'

export const MyComponent = ({name, setName}) => {

    const [trainers, setTrainers] = useState()

    useEffect(() => {

      getTrainers()

    },[])

    const getTrainers = async () => {

      const data = await api.get('trainers')
      setTrainers(data)
      console.log(data)
                                                                                                                                                               

    };

    setName("Dalas")      


  return (
    <div>
        <h1>Hello World {trainers?.data.trainers[0].nombre}!</h1>
    </div>
  )

}
