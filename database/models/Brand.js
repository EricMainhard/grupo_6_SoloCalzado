module.exports = (sequelize, dataTypes) => {

    let alias = "Brand";
    let cols = {
       id: {type: dataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},       
       name: { type: dataTypes.STRING(100), allowNull: false},        
     };
     let config = {
       tableName: 'brands',
       timestamps: false
     };
    
    const Model = sequelize.define(alias, cols, config);

    Model.associate = models => {

      Model.hasMany(models.Product, {
          as: "products",
          foreignKey: 'brand_id'
      })
  }
    
    return Model;
    
    }