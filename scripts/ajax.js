// $(function() {


$('#faveLogin').click(function() {
    console.log("clicked");

//     let jsonURL = "demo.json";

    let jsonURL = "https://gavinraney.github.io/raney-lab-india/fave.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.username);
            
            //loads username
            $("#noSpaces").val(data.username);
            
            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);
                
            });
        }
    });
});



// end of doc ready f/n
// });