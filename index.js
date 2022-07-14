  // console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
  const inputUserName = document.getElementById("userName");
  const inputLastName = document.getElementById("lastName");
  const userFullName = document.getElementById("fullName");
  const userNickname= document.getElementById("nickname");
  const button = document.getElementById("button");

  const alertName = document.getElementById("alertName");

  button.addEventListener('click', printFullNameAndNickName);

  inputUserName.addEventListener('keyup', countNames);
  inputLastName.addEventListener('keyup', countLastames);

  // Get Fullname
      function getFullName(name, lastname) {
          if(name && lastname){
              let completeName = name + " " + lastname;
              return completeName;
          } else {
              return false;
          }
      }
      // Get Nickname
      function getNickname(name, lastname) {
        if(name && lastname){
              //  Verify if the user has wrote more than one lastname
            let  tempNames,
                tempLastName,
                firtstName,
                secondName,     
                firtstLastName,
                secondLastName;
                
            tempNames = name.trim().split(" ");

            console.log(tempNames)
            if (tempNames[0]) {firtstName = tempNames[0]}
            if (tempNames[1]) {secondName = tempNames[1]}

              tempLastName = lastname.trim().split(" ");
              if (tempLastName[0]) {firtstLastName = tempLastName[0]}
              if (tempLastName[1]) {secondLastName = tempLastName[1]}

            //   console.group('Last Name List')
            //     console.log(tempLastName);
            //     console.log(firtstLastName);
            //     console.log(secondLastName);
            //   console.groupEnd;
              //   let secondLastName = tempLastName[1];

              if (tempLastName.length > 1 && secondLastName.length >= 1) {
                      let nickname = name + firtstLastName[0] + secondLastName[0];
                      return nickname;
              } else {
                  let nickname = name + lastname[0] + lastname[1];
                  return nickname;
              }
          } else {
              return false;
          }
      }
      // Print both
      function printFullNameAndNickName() {
          let userName = inputUserName.value;
          let lastName = inputLastName.value;

          let fullName = getFullName(userName, lastName);
          let nickname = getNickname(userName, lastName);
          if  (fullName && nickname) {  
              userFullName.innerHTML = "Your full name is: " + fullName;
              userNickname.innerHTML = "Your nickname is: " + nickname;

            //   console.log(fullName)
            //   console.log(nickname);
          } else {
              console.log("You must to write your name and lastname");
              }
      }

function countNames() {
    let countNames = inputUserName.value.trim();
    let spaceCount =  countNames.split(" ").length - 1;

    if (spaceCount > 1){ 
        alertName.innerHTML = "Please, only write two names maximun!";  
        button.setAttribute("disabled", "disabled");
    }
    else {
        alertName.innerHTML = "";  
        button.removeAttribute("disabled");
    }
    // console.log(spaceCount)
}
function countLastames() {
    let countLastNames = inputLastName.value.trim();
    let spaceCount =  countLastNames.split(" ").length - 1;

    if (spaceCount > 1){ 
        alertName.innerHTML = "Please, only write two last names maximun!";  
        button.setAttribute("disabled", "disabled");
    }
    else {
        alertName.innerHTML = "";  
        button.removeAttribute("disabled");
    }
    // console.log(spaceCount)
}