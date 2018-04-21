const mongoose = require('../../libs/mongoose');
const HashPass = require('../../libs/HashPass');

class User extends mongoose.Model {
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

  static  UpdateOrCreate(obj) {
    return this.update({_id: obj.userId}, obj, {upsert: true, setDefaultsOnInsert: true});
  }

  comparePassword(password) {
    return HashPass.validateHash(this.password, password);
  }
}

module.exports = User;