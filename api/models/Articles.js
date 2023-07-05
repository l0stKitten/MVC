/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //id: {type: 'string', columnName: '_id'},
    //createdAt: {type: 'number', autoCreatedAt: true, },
    //updatedAt: {type: 'number', autoUpdatedAt: true, },
    title:{
      type: 'string'
    },
    body:{
      type:'string'
    }
  }

};

