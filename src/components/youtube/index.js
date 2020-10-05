import React, { Component } from "react"
import SearchBar from "../SearchBar";
import axios from "axios";
import VideoCard from "../Cards";
import Grid from '@material-ui/core/Grid';
import keys from "../../config/keys"
const { apikey } = keys;
class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state= {
      list: null
    }
  }

  submitSearch = (value) => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: apikey,
          q: value,
          part: 'snippet',
          maxResults: 25
        }
      })
      .then(res => {
        this.setState({
          list: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const {list} = this.state;
    return(
      <div>
        <h1>Youtube</h1>
        <SearchBar submitSearch={this.submitSearch} />
        {list ? 
          <div>
            <h1>Résultats de la recherche</h1> 
            <Grid container spacing={2}>
            {list.items.map(element => (
              <Grid item xs={3}  key={element.id.videoId}>
                  <VideoCard element={element}/>
                </Grid>
            ))}
            </Grid>
          </div>
          : null}
      </div>
    )
  }
}

export default Youtube;