const Promise = require('bluebird');
const models = require('../../models');

const attendanceDataMethods = {};

attendanceDataMethods
  .addAttendance = (info) => new Promise((resolve, reject) => {
    models.student.student_attendance_data.create(info)
      .then((created) => {
        resolve(created);
      }).catch((err) => {
        reject(err);
      });
  });

attendanceDataMethods
  .updateAttendance = (info, data) => new Promise((resolve, reject) => {
    models.student.student_attendance_data.update(info, {
      where: {
        people_id: data.people_id,
        course_id: data.course_id,
      },
    }).then((updated) => {
      if (updated > 0) {
        resolve(updated);
      } else {
        reject(updated);
      }
    }).catch((err) => {
      reject(err);
    });
  });

attendanceDataMethods
  .deleteAttendance = (info) => new Promise((resolve, reject) => {
    models.student.student_attendance_data.destroy({
      where: info,
    }).then((deleted) => {
      if (deleted > 0) {
        resolve(deleted);
      } else {
        reject(deleted);
      }
    }).catch((err) => {
      reject(err);
    });
  });

module.exports = attendanceDataMethods;
