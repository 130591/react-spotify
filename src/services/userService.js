import { api } from './index';

export class UserService {

  static async Request(){
    return await api.get('https://api.spotify.com/v1/me', {
      headers: new Headers({
        'Authorization': 'Bearer' + accessToken
      })
    });
  } 

  static async addSongToLibrary(accessToken, id){
    return await api.get(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
      headers: new Headers({
        'Authorization': 'Bearer' + accessToken
      })
    })
  }
}