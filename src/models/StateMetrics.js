export default class StateMetrics {
  constructor (state) {
    this.confirmed = state.confirmed;
    this.active = state.active;
    this.deaths = state.deaths;
    this.recovered = state.recovered;
    this.deltaconfirmed = state.deltaconfirmed;
    this.deltadeaths = state.deltadeaths;
    this.deltarecovered = state.deltarecovered;
    this.state = state.state;
    this.statecode = state.statecode;
  }

  confirmedCases () {
    return this.confirmed;
  }

  activeCases () {
    return this.active;
  }

  recoveredCases () {
    return this.recovered;
  }

  deceasedCases () {
    return this.deaths;
  }

  confirmedCasesDelta () {
    return this.deltaconfirmed;
  }

  recoveredCasesDelta () {
    return this.deltarecovered;
  }

  deceasedCasesDelta () {
    return this.deltadeaths;
  }

  selectedState () {
    return this.state;
  }

  stateCode () {
    return this.statecode;
  }

}
