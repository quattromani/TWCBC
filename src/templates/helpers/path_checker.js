module.exports = function(basename, dirname, path_name) {
  var path = dirname.split("/");
  var onpath = false;

  if (basename === path_name) {
    return true;
  }

  for (var i = 0; i < path.length; i++) {
    // console.log("Path: ", path[i]);
    if (path[i] === path_name) {
      onpath = true;
      break;
    }
  }

  return onpath;
};
