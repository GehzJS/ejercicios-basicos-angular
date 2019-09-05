import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_KEY = 'AIzaSyDGzfhv2gj0ow3ycGEondhE7yL7An1N-zA';
  private SITE_URL = 'https://www.googleapis.com/youtube/v3';
  private PLAYLIST = 'UUH7IANkyEcsVW_y1IlpkamQ';
  private nextPage: string;
  private PARAMS = new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.PLAYLIST)
    .set('key', this.API_KEY);
  constructor(private http: HttpClient) {}

  getVideos() {
    const URL = `${this.SITE_URL}/playlistItems`;
    if (this.nextPage) {
      this.PARAMS.set('pageToken', this.nextPage);
    }
    return this.http.get(URL, { params: this.PARAMS }).pipe(
      map((respuesta: any) => {
        this.nextPage = respuesta.nextPageToken;
        const videos: any[] = [];
        for (const item of respuesta.items) {
          videos.push(item.snippet);
        }
        return videos;
      })
    );
  }
}
