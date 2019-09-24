import { api } from "./index";
import * as spotify from 'spotify-web-sdk';

export class SearchService {
  static async fetchArtists(accessToken, term) {
    return await api.get(
      `https://api.spotify.com/v1/search?q=${term}&type=artist`,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: 'application/json'
        }
      }
    );
  }

  static async fetchAlbum(accessToken, term) {
    return await api.get(
      `https://api.spotify.com/v1/search?q=${term}&type=album`,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: 'application/json'
        }
      }
    );
  }

  static async fetchTracksAlbums(accessToken, id) {
    return await api.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      headers: {
        Authorization: "Bearer " + accessToken,
        Accept: 'application/json'
      }
    });
  }

  static async fetching(accessToken, term) {
    spotify.init({ token: accessToken })

    return await spotify.searchArtists(term)
  }
}
