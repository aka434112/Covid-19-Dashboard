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

  setTitle (title) {
    this.title = title;
  }

  getCount () {
    return this.count;
  }

  setCount (count) {
    this.count = count;
  }

  getDeltaCount () {
    return this.deltaCount;
  }

  setDeltaCount (deltaCount) {
    this.deltaCount = deltaCount;
  }

  getCardType () {
    return this.type;
  }

  setCardType (cardType) {
    this.cardType = cardType;
  }
}
