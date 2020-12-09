$(document).ready(function(){
    // To view the external JSON file in a tabular form
    $.getJSON("https://jsonplaceholder.typicode.com/todos", function(data){
        var output = '<table>';
        output += '<tr><th>User_ID</th><th>ID</th><th>Title</th><th>Completed</th></tr>';
        $.each(data, function(key, val){
            output += '<tr>';
            output += '<td>' + val.userId +'</td>';
            output += '<td>' + val.id +'</td>';
            output += '<td>' + val.title +'</td>';
            if(val.completed == true){
                output += '<td><input type="checkbox" checked="checked" readonly></td>';
            }
            else{
                output += '<td><input type="checkbox" class = "check"></td>';
            }
            output += '</tr>';
        });
        output += '</table>';
        $("#table").html(output);
    });

    //A JS Promise to count the number of checkboxes checked and display an alert if number of checked checkboxes is 5 
    $('.check').click(function(){
        const myPromise = new Promise((resolve, reject) =>{
            var checkbox = $(".check");
            console.log(checkbox);
            var count = checkbox.filter(':checked').length;
            if(count == 5){
                resolve("Congrats. 5 Tasks have been successfully completed!");
            }
            else{
                reject(count);
            }
        });
        myPromise.then((message) => {
            alert(message);
        }).catch((message) => {
            console.log("Checkboxes checked:" + message);
        })
    })
});