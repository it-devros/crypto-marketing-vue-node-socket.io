const mongoose = require('../../libs/mongoose');

class Fiat extends mongoose.Model {
	static load(criteria, select) {
    return this.findOne(criteria).select(select).exec();
  }

  static list(options) {
    options = options || {};
    const criteria = options.criteria || {};
    const page = options.page || 0;
    const limit = options.limit || {};

    return this.find(criteria)
    // .limit(limit)
    // .skip(limit * page)
        .exec();
  }

}

module.exports = Fiat;