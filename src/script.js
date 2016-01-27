var addUser = (userName) => {
  var list = document.createElement("LI");
  var user = document.createTextNode(userName);
  list.appendChild(user);
  document.getElementById('userList').appendChild(list);
  document.getElementById("userName").value = ""
};

var addGroup = (groupName) => {
  var list = document.createElement("LI");
  var group = document.createTextNode(groupName);
  list.appendChild(group);
  document.getElementById('groupList').appendChild(list);
  document.getElementById("groupName").value = ""
};
