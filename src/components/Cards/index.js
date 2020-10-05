import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router';


class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.element
    };
  }

  render() {
    const { list } = this.state;
    const { snippet } = list;
    return (
        <Card style={{maxWidth: 345}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={snippet.thumbnails.high.url}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {snippet.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {snippet.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    );
  }
}

export default VideoCard;
