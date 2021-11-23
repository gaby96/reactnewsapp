
import React, {useState, useEffect} from 'react';


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nytimes from "../../assets/images/nyt.png";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';



    



export default function NewsSection() {
    
    const [articles, setArticles] = useState([]); // articles is an array of objects

  useEffect(() => {
      async function fetchData() {
    try {
      
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`);
        const json = await response.json();
        setArticles(json.results);
        
        
      }
    
     catch (error) {
      console.log(error);
    }
}   fetchData();
  }, [])

    return (
        <>
        <Container maxWidth="lg" >
        <Grid container spacing={3}>
        
        {articles.map((article => {
          const { title, url, id, published_date, abstract } = article;
          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="NY Times"
        width="100"
        height="100"
        image={nytimes}
      />
      <CardContent>
        <Typography gutterBottom component="div" id="title">
          {title.substring(0, 25)}.....
        </Typography>
        <Typography variant="body2" color="text.secondary" id="abstract">
         {abstract.substring(0, 80)}.....
        </Typography>
      </CardContent>
      <CardActions style={{display:'flex', placeContent:'space-between'}}>
        <Button href={url} size="small">Read More</Button>
        <div style={{display:'flex', flexDirection: 'row', alignItems:'flex-end', justifyContent: 'center', width:150}}>
                                            <CalendarTodayIcon style={{ color: 'gray', marginRight: 5}}/>
                                            <Typography variant="body2" component="p">
                                                {published_date}
                                            </Typography>
                                        </div>
      </CardActions>
    </Card>
              
            </Grid>
          );
        }
        ))}
        </Grid>
      </Container>
        </>
    )
}

module.exports = NewsSection;



