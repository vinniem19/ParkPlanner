module.exports = function (sequelize, DataTypes) {
    var Rides = sequelize.define("Rides", {
        rideTitle: DataTypes.STRING,
        park: DataTypes.STRING,
        rideDescription: DataTypes.STRING,
        imageURL: DataTypes.STRING
    });
    return Rides;
};
