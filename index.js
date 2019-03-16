var space = "________";
var breadCrumbs = [''];
var dat = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

var fs = [
  obj1 = {
    name: "MyDoc",
    type: "folder",
    date: new Date("2015-11-10"),
    files: [
      obj11 = {
        name: "MyPictures2",
        type: "folder",
        date: new Date("2016-11-10"),
        files: [
          obj111 = {
            name: "MyVideo30",
            type: "folder",
            date: new Date("2015-05-12"),
            files: []
          },
          obj112 = {
            name: "MyFiles4",
            type: "folder",
            date: new Date("2018-10-06"),
            files: []
          },
          obj113 = {
            name: "Doc13",
            type: "file",
            date: new Date("2019-01-10")
          },
          obj114 = {
            name: "My2oc",
            type: "file",
            date: new Date("2017-10-25")
          },
          obj115 = {
            name: "Photo",
            type: "file",
            date: new Date("2018-12-10")
          }
        ]
      },
      obj12 = {
        name: "MyVideo3",
        type: "folder",
        date: new Date("2019-02-10"),
        files: []
      },
      obj13 = {
        name: "MyFiles4",
        type: "folder",
        date: new Date("2018-11-10"),
        files: []
      },
      obj14 = {
        name: "Doc13",
        type: "file",
        date: new Date("2015-11-09")
      },
      obj15 = {
        name: "My2oc",
        type: "file",
        date: new Date("2015-11-26")
      },
      obj16 = {
        name: "Photo",
        type: "file",
        date: new Date("2015-03-10")
      }
    ]
  },
  obj2 = {
    name: "MyPictures",
    type: "folder",
    date: new Date("2019-03-10"),
    files: [
      obj21 = {
        name: "MyPictures2",
        type: "folder",
        date: new Date("2017-10-10"),
        files: []
      },
      obj22 = {
        name: "MyVideo3",
        type: "folder",
        date: new Date("2000-10-11"),
        files: []
      },
      obj23 = {
        name: "MyFiles4",
        type: "folder",
        date: new Date("2015-11-10"),
        files: []
      },
      obj24 = {
        name: "Doc13",
        type: "file",
        date: new Date("2013-11-10")
      },
      obj25 = {
        name: "My2oc",
        type: "file",
        date: new Date("2010-01-10")
      },
      obj26 = {
        name: "Photo",
        type: "file",
        date: new Date("2001-11-10")
      }
    ]
  },
  obj3 = {
    name: "MyVideo",
    type: "folder",
    date: new Date("2012-01-25"),
    files: [
      obj31 = {
        name: "MyPictures2",
        type: "folder",
        date: new Date("2016-02-15"),
        files: []
      },
      obj32 = {
        name: "MyVideo3",
        type: "folder",
        date: new Date("2010-02-14"),
        files: []
      }
    ]
  },
  obj4 = {
    name: "MyFiles",
    type: "folder",
    date: new Date("2016-02-15"),
    files: [
      obj41 = {
        name: "Doc13",
        type: "file",
        date: new Date("2000-09-10")
      },
      obj42 = {
        name: "My2oc",
        type: "file",
        date: new Date("1999-02-15")
      },
      obj43 = {
        name: "Photo",
        type: "file",
        date: new Date("1998-02-15")
      }
    ]
  },
  obj5 = {
    name: "Doc1",
    type: "file",
    date: new Date("2016-05-19")
  },
  obj6 = {
    name: "MyDoc",
    type: "file",
    date: new Date("2019-03-15")
  },
  obj7 = {
    name: "Photo",
    type: "file",
    date: new Date("2016-02-15")
  }
];

var curentFolder = [fs];

function BackFolder(){
  if (curentFolder.length > 1){
    curentFolder.splice((curentFolder.length-1), 1);
    ChangeBreadCrumbs('');
    LoadContent(curentFolder[(curentFolder.length-1)], 'All');
  }
}

function ShowAllContent(){
  LoadContent(curentFolder[(curentFolder.length-1)], 'All');
}

function ShowAllFolders(){
  LoadContent(curentFolder[(curentFolder.length-1)], 'Folder');
}

function ShowAllFiles(){
  LoadContent(curentFolder[(curentFolder.length-1)], 'File');
}

function AddNewFolder(){
  let newName = prompt("Enter name of new folder" + '. Remember: do not use "space"!', "new_folder");
  if ( newName != null && IsNotDouble(newName + "-folder") ) {
    let newObj = {
      name: newName,
      type: "folder",
      date: new Date(),
      files: []
    };
    curentFolder[(curentFolder.length-1)].push(newObj);
    ShowAllContent();
  }
}

function AddNewFile(){
  let newName = prompt("Enter name of new file" + '. Remember: do not use "space"!', "new_file");
  if ( newName != null && IsNotDouble(newName + "-file") ) {
    let newObj = {
      name: newName,
      type: "file",
      date: new Date()
    };
    curentFolder[(curentFolder.length-1)].push(newObj);
    ShowAllContent();
  }
}

function ShowFilesCreatedAfter() {
  let date = new Date(prompt("Please enter date in format YYYY-MM-DD.", ''));
  if (date != null) {
    document.getElementById("MainFild").innerHTML  ='';
    for (let i = 0; i < curentFolder[(curentFolder.length-1)].length; i++) {
      if (curentFolder[(curentFolder.length-1)][i].type == 'file' && date < curentFolder[(curentFolder.length-1)][i].date) {
          document.getElementById("MainFild").innerHTML  +=
            CodeGenerator(curentFolder[(curentFolder.length-1)][i].name,
            curentFolder[(curentFolder.length-1)][i].type,
            curentFolder[(curentFolder.length-1)][i].date);
      }
    }
  }
}

function OpenFolder(idtype) {
  let boo = true
  let i = 0;
  while (boo) {
    if ( (curentFolder[(curentFolder.length-1)][i].name + '-' + curentFolder[(curentFolder.length-1)][i].type) == idtype ){
      ChangeBreadCrumbs(curentFolder[(curentFolder.length-1)][i].name);
      curentFolder.push(curentFolder[(curentFolder.length-1)][i].files);
      boo = false;
    }
    i++;
  }
  LoadContent(curentFolder[(curentFolder.length-1)], 'All');
}

function Rename(idtype) {
  let newName = prompt("Enter new name of " + idtype + '. Remember: do not use "space"!', 'new name');
  if ( newName != null && ( IsNotDouble(newName + "-file") || IsNotDouble(newName + "-folder") ) ) {
    let boo = true
    let i = 0;
    while (boo) {
      if ( (curentFolder[(curentFolder.length-1)][i].name + "-" + curentFolder[(curentFolder.length-1)][i].type) == idtype){
        curentFolder[(curentFolder.length-1)][i].name = newName;
        boo = false;
      }
      i++;
    }
    LoadContent(curentFolder[(curentFolder.length-1)], 'All');
  }
}

function Delete(idtype){
  let areDelete = confirm("Do you realy want delete " + idtype + "?");
  let i = 0;
  while (areDelete) {
    if ( (curentFolder[(curentFolder.length-1)][i].name + '-' + curentFolder[(curentFolder.length-1)][i].type) == idtype ){
      curentFolder[(curentFolder.length-1)].splice(i,1);
      areDelete = false;
    }
    i++;
  }
  LoadContent(curentFolder[(curentFolder.length-1)], 'All');
}

function ChangeBreadCrumbs(name){
  let string = '';
  if (name == ''){
    breadCrumbs.splice( (breadCrumbs.length-1), 1)
  }
  else {
    breadCrumbs.push(name);
  }
  for (let i = 0; i < breadCrumbs.length; i++) {
    string += breadCrumbs[i] + '/';
  }
  document.getElementById("BreadCrumbs").innerHTML = string;
}

function LoadContent(curentFolder, contentType){
  document.getElementById("MainFild").innerHTML  ='';
  for (let i = 0; i < curentFolder.length; i++) {
    if (contentType == 'All'){
      document.getElementById("MainFild").innerHTML  += CodeGenerator(curentFolder[i].name, curentFolder[i].type, curentFolder[i].date);
    }
    else if (contentType == 'File') {
      if (curentFolder[i].type == 'file') {
        document.getElementById("MainFild").innerHTML  += CodeGenerator(curentFolder[i].name, curentFolder[i].type, curentFolder[i].date);
      }
    }
    else if (contentType == 'Folder') {
      if (curentFolder[i].type == 'folder') {
        document.getElementById("MainFild").innerHTML  += CodeGenerator(curentFolder[i].name, curentFolder[i].type, curentFolder[i].date);
      }
    }
  }
}

function CodeGenerator(name, type, date){

	var string = "<div id=" + type + name + " class=" + type + ">";

	if( type == 'folder' ){
		string += "<button onclick=OpenFolder('" + name + "-" + type + "')>Open</button>";
	}
	else {
		string += space;
	}

	string += space + name + space + space + date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear() + space +
					"<button onclick=Rename('" + name + "-" + type + "')>Rename " + type + "</button>" +
					"<button onclick=Delete('" + name + "-" + type + "')>Delete " + type + "</button>" +
					"</div>";

	return string;
}

function IsNotDouble(newName){
  for (var i = 0; i < curentFolder[(curentFolder.length-1)].length; i++) {
    if( (curentFolder[(curentFolder.length-1)][i].name + "-" + curentFolder[(curentFolder.length-1)][i].type) == newName){
      alert("Can't create/rename - "
        + curentFolder[(curentFolder.length-1)][i].type + " "
        + curentFolder[(curentFolder.length-1)][i].name
        + " exist! Please type another name." );
      return false;
    }
  }
  return true;
}
