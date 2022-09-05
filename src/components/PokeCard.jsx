import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'





export const PokeCard = ({image, name, stats}) => {

    console.log(image)

  return (
    <Card sx={{maxWidth: 345}}>

        <CardActionArea>

            <CardMedia
            
            component="img"
            image={image}
            alt="Pokemon"

            />

            <CardContent>


                <Typography gutterBottom variant="h5" component="div">{name?.toUpperCase()}</Typography>
                
                {stats?.map((stat) => {

                    return (
                        <Typography key={stat.stat.name} variant="body2" color="textSecondary" component="div">
                            {stat.stat.name?.toUpperCase()}: {stat.base_stat}
                        </Typography>
                    )

                })};




            </CardContent>

        </CardActionArea>



    </Card>
  )
}
