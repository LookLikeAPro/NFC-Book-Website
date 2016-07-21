// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// // import { belongsTo, hasMany } from 'ember-data/relationships';

// export default Model.extend({
// 	// title: attr('string'),
// 	// description: attr('string'),
// 	// created_at: attr('string'),
// 	// updated_at: attr('string')
// 	title: attr('string')
// });


import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr()
});
