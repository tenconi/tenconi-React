import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Item.css'
import ItemCount from '../Cards/ItemCount';

function Item({data}) {

  return (
    <Card className="imgCard">
      <CardMedia
        component="img"
        image={data.img}
        alt="character"
        className="imgCardMedia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="incluirNombre">
          {data.character}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.quote}
        </Typography>
      </CardContent>

      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      <ItemCount />
    </Card>
  );
}

export default Item;
