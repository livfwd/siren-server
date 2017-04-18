'use strict';
module.exports = function (sequelize, DataTypes) {
  var PlaylistEpisode = sequelize.define('PlaylistEpisode', {
    PlaylistId: DataTypes.INTEGER,
    EpisodeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function () {
        PlaylistEpisode.belongsTo(models.User);
        PlaylistEpisode.belongsTo(models.Playlist);
      }
    }
  });
  return PlaylistEpisode;
};
