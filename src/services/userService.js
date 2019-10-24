import { api } from "./index";
import { redirect_uri } from '../config';

export class UserService {
  static async Request(accessToken) {
    return await api.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    });
  }

  static async addSongToLibrary(accessToken, id) {
    return await api.get(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
      headers: new Headers({
        Authorization: "Bearer" + accessToken
      })
    });
  }

  static async Token() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href = redirect_uri;
    } else {
      return hashParams.access_token;
    }
  }
}
