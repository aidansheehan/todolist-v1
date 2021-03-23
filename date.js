

let today = new Date();

exports.getDate = function() {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  }
  return today.toLocaleString("en-US", options);
}

exports.getDay = function() {
  const options = {
    weekday: "long"
  }
  return today.toLocaleString("en-US", options);
}
