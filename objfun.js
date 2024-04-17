function fun(obj) {
  var myObj = {
    courseName: "es6",
    courseDuration: 3,
    courseOwner: "Ahmed",
  };
  var resObj = {};
  Object.assign(resObj, myObj, obj);

  // var myObjKeys = Object.keys(myObj);
  // var resObjKeys = Object.keys(resObj);
  // console.log(myObjKeys);
  // console.log(resObjKeys);

  if (Object.keys(myObj).length != Object.keys(resObj).length) {
    throw "error";
  } else {
    console.log(
      `course name is ${resObj.courseName} it lasts for ${resObj.courseDuration} hours and the istructor is eng ${resObj.courseOwner}`
    );
  }
  // console.log(
  //   `course name is ${myObj.courseName} it lasts for ${myObj.courseDuration} hours and the istructor is eng ${myObj.courseOwner}`
  // );
}
fun({});
fun({ courseName: "network", courseDuration: 5, courseOwner: "Mohamed" });
fun({ courseName: "js", courseDuration: 1 });
fun({ courseName: "js", courseDurationkkk: 1 });

// fun({
//   courseName: "network",
//   courseDuration: 5,
//   courseOwner: "Mohamed",
//   hello: "helloWorld!",
// });
// fun({
//   courseName: "network",
//   courseDuration: 5,
//   courseOwner2: "Mohamed",
// });
