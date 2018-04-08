module.exports = class Cookies_api {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  get(key) {
    return this.req.cookies[key];
  }

  set(name, val, option) {
    this.res.cookie(name, val, option);
  }
};