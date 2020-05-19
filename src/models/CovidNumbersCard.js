export default class CovidNumbersCard {
  constructor (title, type, count, deltaCount) {
    this.title = title;
    this.count = count;
    this.deltaCount = deltaCount;
    this.type = type;
  }

  getTitle () {
    return this.title;
  }

  getCount () {
    return this.count;
  }

  getDeltaCount () {
    return this.deltaCount;
  }

  getCardType () {
    return this.type;
  }
}
