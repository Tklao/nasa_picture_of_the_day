export class NasaRequestModel {
  public title: string;
  public explanation: string;
  public url: string;
  public date: string;

  constructor (title: string, explanation: string, url: string, date: string) {
    this.title = title;
    this.explanation = explanation;
    this.url = url;
    this.date = date;
  }
}
