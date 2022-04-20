  //array of hMesg
  //its a nested array, meaning, item 0 "cat" has an array in the item
  //this is used for the "dependent inputs" in example #5
  let hMesg = [
    ["Basketball", ["like hamster michael jordan always says, go sports!", "im like hamster lebron", "kyrie did nothing wrong"]],
    ["Reggie", ["i used to be that nintendo guy but now im a hamster", "please let me play my 3ds", "please enjoy the following super smash hamsters character reveal trailer"]],
    ["Croquette", ["i am named after a yummy treat","potato croquette is a 10/10 but im so much better", "please do not eat me" ]],
    ["Gummy", ["gummy like wormbs :)", "i am not squishy", "please help me attain absolute power"]],
    ["Terror", ["idk why my names terror im not evil", "i dream of daisies and life eternal", "stop killing hamsters to make hamburgers :("]],
    ["Goku", ["hey it's me, goku!", "and this.. is to go even further.. BEYOND", "body dont fail me now. hamsterken x3!"]],
    ["Mochi", ["squishy, like mochi :)", "please dont eat me either", "my favorite season is fall, i will not elaborate"]],
    ["Gerbil", ["im not even a gerbil :(", "help me i dont wanna be gerbil", "i just wanna finish the battle pass already man"]],
    ["Degu", ["no one ever talks abt degus","degu facts should be in high school curriculums", "i will bite you"]],
    ["Stapler", ["i am not even a stapler", "i wish i was a stapler", "i am powerdul like stapler >:)"]],
    ["Sephiroth", ["i will... never be a memory", "lend me your strength. let us defy destiny together", "wow sephiroth is so edgy ill stop quoting him im a hamster"]],
    ["Babytron", ["ooh thats a danny g beat", "thought he heard a t-rex, thats the engine revvin, goofy", "cranberry everfresh, i dont sip pepsi"]],
  ];

// date in header
var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

//enter difficulties in return of submission lol
var el = document.getElementById("submitLogin");

// click event on that element, run named f/n
el.addEventListener("click", displayUserName);

function displayUserName() {
  // grab the value of the user input
  var elName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var phoneNum = document.getElementById("phone").value;
  //do something with it
  outputUNPWT.innerText = elName
  outputUNPWT.innerText = password
  outputUNPWT.innerText = phone
  ? `welcome in ${elName}. so cool :)`
  : `You haven't selected a valid account :(`;
}

// card 2
$("#btn").on("click", () => {
  console.log("here");
  let selectedHamster;
  console.log("val" + selectedHamster);
  if ($("input:radio[name='hamsterName']").is(":checked")) {
    selectedHamster = $("input[name='hamsterName']:checked").val();
    // show the output:
  }
  output.innerText = selectedHamster
    ? `You selected ${selectedHamster}, good choice :)`
    : `You haven't selected a hamster :(`;
});

//hamstergram
  //when user selects specific hamster, load in messages from array

  // $('#petKind').on('')

  $("#hamsters").on("change", function (e) {
    //enables the pet name dropdown
    $("#hMesg").prop("disabled", false);

    let inputVal = this.value;

    console.log(inputVal);

    //loop though array of hamsters
    $.each(hMesg, function (key, value) {
      //match hamster name to user selected
      if (inputVal === value[0]) {
        console.log(
          "value[0]:" + value[0] + ", key:" + key + "value: " + value
        );
        $.each(value, function (nestKey, nestValue) {
          // console.log(nestKey);

          switch (nestKey) {
            case 0:
              $("label[for=hamster]").text(nestValue);
              $("#hMesg").empty();
              $("#hMesg").append(
                $("<option>").text(`select a ${nestValue} message`)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#hMesg").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });
