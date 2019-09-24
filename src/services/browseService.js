import { api } from "./index";

export class BrowserService {
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

  static async fetchRecentlyPlay(accessToken) {
    if (accessToken) {
      return await api.get(
        `https://api.spotify.com/v1/me/player/recently-played?type=track&limit=5`,
        {
          headers: {
            Authorization: "Bearer " + accessToken
          }
        }
      );
    }
  }
}
