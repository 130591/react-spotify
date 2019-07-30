import { api } from "./index";

export class AlbumService {
  static async fetchCategories(accessToken) {
    return await api.get(`https://api.spotify.com/v1/browse/categories`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken
      })
    });
  }

  static async fetchNewReleases(accessToken) {
    return await api.get(`https://api.spotify.com/v1/browse/new-releases`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken
      })
    });
  }

  static async fetchFeatured(accessToken) {
    return await api.get(
      `https://api.spotify.com/v1/browse/featured-playlists`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
  }

  static async fetchRecentlyPlay(accessToken, limit){
    return await api.get(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
      headers: new Headers({
        Authorization: 'Bearer' + accessToken
      })
    })
  }
}
