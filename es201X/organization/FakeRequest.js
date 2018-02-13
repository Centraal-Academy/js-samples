class Request {
  constructor () {
    this.headers = {}
  }
}

class Post extends Request {
  constructor () {
    super()
    this._body = {}
  }

  get body () {
    return this._body
  }

  set body (newBody) {
    this._body = newBody
  }

  static get type () {
    return 'post'
  }
}

class Get extends Request {
  constructor () {
    super()
    this.data = {}
  }

  static get type () {
    return 'get'
  }
}

module.exports = { Request, Get, Post }
