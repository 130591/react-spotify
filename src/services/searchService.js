import { api } from "./index";

export class SearchService {
  static async fetchSearching(accessToken, term) {
    return await api.get(
      `https://api.spotify.com/v1/search?q=name:${term}&type=album&artist&track&playlist`,
      {
        headers: {
          Authorization: "Bearer " + accessToken
        }
      }
    );
  }

  static async fetchTracksAlbums(accessToken, id) {
    return await api.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }
}
