import { api } from "./index";

export class AlbumService {
  static async fetchAlbums(accessToken) {
    return await api(`https://api.spotify.com/v1/me/albums`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken
      })
    });
  }
}
