import { api } from "./index";

export class Artists {
  static async fetchArtists(artistIds, accessToken) {
    return await api.get(`https://api.spotify.com/v1/artists?ids=${artistIds}`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken
      })
    });
  }
  
  static async fetchArtistSongs(artistId, accessToken) {
    return await api.get(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
  }
}
