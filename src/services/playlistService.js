import { api } from "./index";

export class PlayListService {
  static async fetchPlaylistsMenu(userId, accessToken) {
    return await api.get(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
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
}
