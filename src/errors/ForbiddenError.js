class ForbiddenError extends Error {
  constructor (details) {
    super();
    this.details = details;
  }
}

module.exports = ForbiddenError;