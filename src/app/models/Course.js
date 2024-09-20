const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
   {
      name: { type: String, required: true },
      description: { type: String },
      image: { type: String },
      slug: { type: String, slug: 'name', unique: true },
      videoId: { type: String, required: true },
   },
   {
      timestamps: true,
   },
);

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);
