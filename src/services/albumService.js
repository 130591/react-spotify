import { api } from "./index";

export class AlbumService {
  static async fetchAlbums(accessToken) {
    try {
      return await api.get(`https://api.spotify.com/v1/me/albums`, {
        headers: {
          Authorization: "Bearer " + accessToken
        }
      });
    } catch (err) {
      return err;
    }
  }
}
