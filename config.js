export default class Config {
  constructor() {
    const API_KEY = '6ab0dc0aa1e808160a011f6f66e66463';
    this.API_KEY = API_KEY;
  }

  getKey() {
    return this.API_KEY;
  }
}
