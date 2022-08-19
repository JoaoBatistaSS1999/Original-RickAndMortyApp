import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./styles.module.css";

interface Props {
  name: string;
  image: string;
  id: number;
  path: string;
}

const CardItem: React.FC<Props> = ({ name, image, id, path }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/${path}/${id}`}>
        <CardMedia
          component='img'
          image={image}
          alt={name}
          className={styles.image}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/${path}/${id}`}>
          <Button size='small'>More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardItem;
