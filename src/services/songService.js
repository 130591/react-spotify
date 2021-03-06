import { api } from "./index";

export class SongService {
  
  static async fetchFeaturesAudio(accessToken, id){
    return await api.get(`https://api.spotify.com/v1/audio-features/${id}`, {
      headers: new Headers({
        Authorization: 'Bearer' + accessToken
      })
    })
  }

  static async fetchSongs(accessToken) {
    return await api.get(`https://api.spotify.com/v1/me/tracks?limit=50`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken
      })
    });
  }

  static async searchSongs(searchTerm, accessToken) {
    return await api.get(
      `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
  }

  static async fetchRecentlyPlayed(accessToken) {
    return await api.get(
      `https://api.spotify.com/v1/me/player/recently-played`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
  }
}
