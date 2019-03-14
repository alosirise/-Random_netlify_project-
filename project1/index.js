$(function () {

    document.getElementById('reset').style.visibility = 'hidden';
    document.getElementById('detail').style.visibility = 'hidden';
    document.getElementById('clear').style.visibility = 'hidden';
    $(function () { $("h1").hide().fadeIn(2000) });
    $(function () { $("#gachapic").hide().fadeIn(2000) });

    $("#seeAll").click(function () {
        console.log('Get Data . . .');
        $("#datalist").toggle("slow");
    });
    
    $("#clear").click(function(){
        $("#save").empty();
        document.getElementById('clear').style.visibility = 'hidden';
      });

    $.get("GBF.json", function (data, status) {
        console.log(status);
        if (status == 'success') {
            var products = data.Search;
            var tableHead = '<tr> <th>Character</th> <th>Rarity</th> <th>Specialty</th>  <th>Style</td> <th>Name</th> <th>Gender</th> </tr>'
            $('#datalist').append(tableHead);
            for (var index in products) {
                var product = products[index];
                var tableRow = '<tr>  <td>' + '<img class ="imgtable" src= ' + product.Character_image2 + '> ' + '</td>  <td>' + ' <img class ="imgtable" src= ' + product.Rarity + '> ' + '</td>  <td>' + '<img class ="imgtable" src= ' + product.Specialty + '> ' + '</td><td>' + '<img class ="imgtable" src= ' + product.Style
                    + '> ' + '</td> <td>' + product.Name + '</td> <td>' + product.Gender + '</td> </tr>'

                $('#datalist').append(tableRow);
                console.log(product);
            }
        }
    });

        function getRandomInt2(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
         
    $('#touch').click(function () {

        document.getElementById('touch').style.visibility = 'hidden';
        document.getElementById('reset').style.visibility = 'visible';
        document.getElementById('detail').style.visibility = 'visible';
        document.getElementById('clear').style.visibility = 'visible';
        var rdm = getRandomInt2(1, 100);  // 100 num
        console.log("Chance 1-100%=" + rdm);
        var e = document.getElementById("selectRate");
        var rate = e.options[e.selectedIndex].value;

        if (rate == 1) {
            if (rdm <= 55) { //55%
                console.log('R basic');
                rdm_R(rdm);
            } else if (rdm <= 90) { //35%
                console.log('SR basic');
                rdm_SR();
            } else { // 10%
                console.log('SSR basic');
                rdm_SSR();
                alert("Congratulations !! \n You Got SSR ! in basic rate");
            }
        }
        else if (rate == 2) {
            if (rdm <= 35) { //35%
                console.log('R premium');
                rdm_R(rdm);
            } else if (rdm <= 70) { //35%
                console.log('SR premium');
                rdm_SR();
            } else { //30%
                console.log('SSR Premium');
                rdm_SSR();
                alert("Congratulations !! \n You Got SSR ! in premium rate");
            }
        } else {
            alert("Please select rate !");
        }
        $(function () { $("picture").hide().fadeIn(2700) });
        $(function () { $("picture2").hide().fadeIn(3300) });        
    });


    $('#reset').click(function () {
        document.getElementById('touch').style.visibility = 'visible';
        document.getElementById('reset').style.visibility = 'hidden'; 
        document.getElementById("touch").disabled = false;
        // document.getElementById("answer").src = "https://stamp.archsted.com/storage/stamps/ZvJ7tQ4e8jF8FDiRf6dLCkOmzTLnPCsSTgjlkR2T.gif"
        //document.getElementById("answer2").src = "";
        //  document.getElementById("answer3").src = ""
        // document.getElementById("name").innerHTML = ""
        // document.getElementById("detail").innerHTML = ""
        // document.getElementById("datalist").src = ""  
        $('#answer').attr('src', 'https://stamp.archsted.com/storage/stamps/ZvJ7tQ4e8jF8FDiRf6dLCkOmzTLnPCsSTgjlkR2T.gif');
        $('#answer2').attr('src','');
        $('#answer3').attr('src','');
        $('#name').empty();
        $('#detail').empty();
        $('#datalist2').empty();
    });


    function rdm_R(rdm) {
        var R_roll = getRandomInt2(13, 19);
        console.log('R_Roll = ' + R_roll);

        // var R_character = [
        //     "Grandblue_project/R_00.png",
        //     "Grandblue_project/R_10.png",
        //     "Grandblue_project/R_20.png",
        //     "Grandblue_project/R_30.png",
        //     "Grandblue_project/R_40.png",
        //     "Grandblue_project/R_50.png",
        //     "Grandblue_project/R_60.png"
        // ];

        // var R_smallpic = [
        //     "Grandblue_project/R_02.png",
        //     "Grandblue_project/R_12.png",
        //     "Grandblue_project/R_22.png",
        //     "Grandblue_project/R_32.png",
        //     "Grandblue_project/R_42.png",
        //     "Grandblue_project/R_52.png",
        //     "Grandblue_project/R_62.png"
        // ];

        // document.getElementById("answer").src = R_character[R_roll]
        // document.getElementById("answer2").src = R_smallpic[R_roll]
        // console.log(R_character[R_roll])

        $.get("GBF.json", function (data, status) {
            var products = data.Search;
            var product = products[R_roll];
            // document.getElementById("answer").src = product.Character_image0
            // document.getElementById("answer2").src = product.Character_image2
            // document.getElementById("answer3").src = product.Character_image1
            //document.getElementById("name").innerHTML = product.Name
            //document.getElementById("detail").innerHTML = product.Detail

            $('#answer').attr('src',product.Character_image0);
            $('#answer2').attr('src',product.Character_image2);
            $('#answer3').attr('src',product.Character_image1);
            $('#name').text(product.Name);
            $('#detail').text(product.Detail);
            $("#save").append('<li>'+product.Name+' [ R ]'+'</li>');

            var tableHead = '<tr> <th>Character</th> <th>Rarity</th> <th>Specialty</th>  <th>Style</td> <th>Name</th> <th>Gender</th> </tr>'
            $('#datalist2').append(tableHead);
            var tableRow = '<tr>  <td>' + '<img class ="imgtable" src= ' + product.Character_image2 + '> ' + '</td>  <td>' + ' <img class ="imgtable" src= ' + product.Rarity + '> ' + '</td>  <td>' + '<img class ="imgtable" src= ' + product.Specialty + '> ' + '</td><td>' + '<img class ="imgtable" src= ' + product.Style
                + '> ' + '</td> <td>' + product.Name + '</td> <td>' + product.Gender + '</td> </tr>'

            $('#datalist2').append(tableRow);
        });
        return R_roll;
    }



    function rdm_SR(rdm) {
        var SR_roll = getRandomInt2(6, 12);
        console.log('SR_Roll = ' + SR_roll);

        $.get("GBF.json", function (data, status) {
            var products = data.Search;
            var product = products[SR_roll];

            $('#answer').attr('src',product.Character_image0);
            $('#answer2').attr('src',product.Character_image2);
            $('#answer3').attr('src',product.Character_image1);
            $('#name').text(product.Name);
            $('#detail').text(product.Detail);
            $("#save").append('<li>'+product.Name+' [ SR ]'+'</li>');

            var tableHead = '<tr> <th>Character</th> <th>Rarity</th> <th>Specialty</th>  <th>Style</td> <th>Name</th> <th>Gender</th> </tr>'
            $('#datalist2').append(tableHead);
            var tableRow = '<tr>  <td>' + '<img class ="imgtable" src= ' + product.Character_image2 + '> ' + '</td>  <td>' + ' <img class ="imgtable" src= ' + product.Rarity + '> ' + '</td>  <td>' + '<img class ="imgtable" src= ' + product.Specialty + '> ' + '</td><td>' + '<img class ="imgtable" src= ' + product.Style
                + '> ' + '</td> <td>' + product.Name + '</td> <td>' + product.Gender + '</td> </tr>'

            $('#datalist2').append(tableRow);
        });
        return SR_roll;
    }



    function rdm_SSR(rdm) {
        var SSR_roll = getRandomInt2(0, 5);
        console.log('SSR_Roll = ' + SSR_roll);

        $.get("GBF.json", function (data, status) {
            var products = data.Search;
            var product = products[SSR_roll];
            
            $('#answer').attr('src',product.Character_image0);
            $('#answer2').attr('src',product.Character_image2);
            $('#answer3').attr('src',product.Character_image1);
            $('#name').text(product.Name);
            $('#detail').text(product.Detail);
            $("#save").append('<li>'+product.Name+' [ SSR ! ]'+'</li>');

            var tableHead = '<tr> <th>Character</th> <th>Rarity</th> <th>Specialty</th>  <th>Style</td> <th>Name</th> <th>Gender</th> </tr>'
            $('#datalist2').append(tableHead);
            var tableRow = '<tr>  <td>' + '<img class ="imgtable" src= ' + product.Character_image2 + '> ' + '</td>  <td>' + ' <img class ="imgtable" src= ' + product.Rarity + '> ' + '</td>  <td>' + '<img class ="imgtable" src= ' + product.Specialty + '> ' + '</td><td>' + '<img class ="imgtable" src= ' + product.Style
                + '> ' + '</td> <td>' + product.Name + '</td> <td>' + product.Gender + '</td> </tr>'

            $('#datalist2').append(tableRow);
        });
        return SSR_roll;
    }

});