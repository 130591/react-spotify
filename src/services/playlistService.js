import { api } from "./index";

export class PlayListService {
  static async fetchPlaylistsMenu(accessToken) {
    return await api.get(`https://api.spotify.com/v1/me/playlists`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken
      })
    });
  }

  static async fetchPlaylistUser(userId, accessToken) {
    return await api.get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }

  static async fetchPlaylistSongs(userId, playlistId, accessToken) {
    return await api.get(
      `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
  }

  static async reprodutionList(accessToken, type) {
    return await api.get(`https://api.spotify.com/v1/me/top/${type}`, {
      headers: { Authorization: "Bearer " + accessToken }
    });
  }

  static async createPlaylist(id, name, accessToken) {
    return await api.post(`https://api.spotify.com/v1/users/${id}/playlists`,
      { name: name, public: false },
      {
        headers: {
          Authorization: "Bearer" + accessToken,
        }
      });
  }
}
