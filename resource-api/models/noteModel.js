"note strict";

const Note = function (data) {
  this.note = data.note;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

Note.create = function (data, result) {
  connection.query("INSERT INTO notes set ?", data, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Note.read = function (result) {
  connection.query("SELECT * FROM notes", (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Note.update = function (id, data, result) {
  connection.query("UPDATE notes SET ? WHERE id = ?", [data, id], function (
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Note.delete = function (id, result) {
  connection.query("DELETE FROM notes WHERE id = ?", [id], function (
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Note;
