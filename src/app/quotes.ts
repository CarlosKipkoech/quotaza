export class Quotes {
  showInfo: boolean;
  completeDate!: Date;
  constructor(
    public id: number,
    public name: string,
    public title: string,
    public quote: string,
    public author: string,
    public datePosted: Date,
    public upvotes: number,
    public downvotes: number
  ) {
    this.showInfo = false;
  }
}
