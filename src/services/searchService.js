import { api } from "./index";

export class SearchService {
  static async fetchSearching(accessToken, term) {
    return await api.get(
      `https://api.spotify.com/v1/search?q=name:${term}&type=album&artist&track`,
      {
        headers: {
          Authorization: "Bearer " + accessToken
        }
      }
    );
  }
}
