export interface Country {
  name: string,
  startDate: string,
  endDate: string,
  leftPast:
    {
      days: string,
      hours: string,
      minutes: string,
      seconds: string
    },
  leftFuture:
    {
      days: string,
      hours: string,
      minutes: string,
      seconds: string
    }
  startLink: string,
  endLink: string
}
