$(function () {

    document.getElementById('reset').style.visibility = 'hidden';
    document.getElementById('detail').style.visibility = 'hidden';
    $(function () { $("h1").hide().fadeIn(2000) });    
    $(function () { $("#gachapic").hide().fadeIn(2000) });

    $.get("GBF.json", function (data, status) {
        console.log(data);
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


        function test(s){
            
        }

function test2(){}


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function getRandomInt2(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('#touch').click(function () {
        
        document.getElementById('touch').style.visibility = 'hidden';
        document.getElementById('reset').style.visibility = 'visible';
        document.getElementById('detail').style.visibility = 'visible';
        var rdm = getRandomInt(99);  // 100 num
        console.log(rdm);

        if (rdm <= 34) { //35 num = 35%
            console.log('R');
            rdm_R(rdm);
        } else if (rdm <= 69) { //35 num = 35%
            console.log('SR');
            rdm_SR();
        } else { //30 num  =30%
            console.log('SSR');
            rdm_SSR();
        }

        $(function () { $("picture").hide().fadeIn(2700) });
        $(function () { $("picture2").hide().fadeIn(3500) });

    });

    $('#reset').click(function () {
        document.getElementById('touch').style.visibility = 'visible';
        document.getElementById('reset').style.visibility = 'hidden';

        document.getElementById("touch").disabled = false;
      //  document.getElementById("answer").src = "https://stamp.archsted.com/storage/stamps/ZvJ7tQ4e8jF8FDiRf6dLCkOmzTLnPCsSTgjlkR2T.gif"
        document.getElementById("answer2").src = "Grandblue_project/tranparant.png";

        $('#answer').attr('src','https://stamp.archsted.com/storage/stamps/ZvJ7tQ4e8jF8FDiRf6dLCkOmzTLnPCsSTgjlkR2T.gif');
        // document.getElementById("name").innerHTML = ""
        // document.getElementById("detail").innerHTML = ""
        // document.getElementById("datalist").src = ""

        $('#detail').empty();
        document.getElementById("answer3").src = ""
        $('#name').empty();
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
            document.getElementById("answer").src = product.Character_image0
            document.getElementById("answer2").src = product.Character_image2
            document.getElementById("answer3").src = product.Character_image1
        
            //document.getElementById("name").innerHTML = product.Name
            //document.getElementById("detail").innerHTML = product.Detail
            
            $('#name').text(product.Name);    
            $('#detail').text(product.Detail);   

            var tableHead = '<tr> <th>Character</th> <th>Rarity</th> <th>Specialty</th>  <th>Style</td> <th>Name</th> <th>Gender</th> </tr>'
            $('#datalist2').append(tableHead);
            var tableRow = '<tr>  <td>' + '<img src= ' + product.Character_image2 + '> ' + '</td>  <td>' + '<img src= ' + product.Rarity + '> ' + '</td>  <td>' + '<img src= ' + product.Specialty + '> ' + '</td><td>' + '<img src= ' + product.Style
                + '> ' + '</td> <td>' + product.Name + '</td> <td>' + product.Gender + '</td> </tr>'

            $('#datalist2').append(tableRow);
        });
        return R_roll;
    }


    function rdm_SR(rdm) {
        var SR_roll = getRandomInt2(6, 12);
        console.log('SR_Roll = ' + SR_roll);

        // var SR_character = [
        //     "Grandblue_project/SR_00.png",
        //     "Grandblue_project/SR_10.png",
        //     "Grandblue_project/SR_20.png",
        //     "Grandblue_project/SR_30.png",
        //     "Grandblue_project/SR_40.png",
        //     "Grandblue_project/SR_50.png",
        //     "Grandblue_project/SR_60.png"
        // ];

        // var SR_smallpic = [
        //     "Grandblue_project/SR_02.png",
        //     "Grandblue_project/SR_12.png",
        //     "Grandblue_project/SR_22.png",
        //     "Grandblue_project/SR_32.png",
        //     "Grandblue_project/SR_42.png",
        //     "Grandblue_project/SR_52.png",
        //     "Grandblue_project/SR_62.png"
        // ];
        // document.getElementById("answer").src = SR_character[SR_roll]
        // document.getElementById("answer2").src = SR_smallpic[SR_roll]
        // console.log(SR_character[SR_roll])

        $.get("GBF.json", function (data, status) {
            var products = data.Search;
            var product = products[SR_roll];
            document.getElementById("answer").src = product.Character_image0
            document.getElementById("answer2").src = product.Character_image2
            document.getElementById("answer3").src = product.Character_image1
            // document.getElementById("name").innerHTML = product.Name
            // document.getElementById("detail").innerHTML = product.Detail
                  
            $('#name').text(product.Name);    
            $('#detail').text(product.Detail); 

            var tableHead = '<tr> <th>Character</th> <th>Rarity</th> <th>Specialty</th>  <th>Style</td> <th>Name</th> <th>Gender</th> </tr>'
            $('#datalist2').append(tableHead);
            var tableRow = '<tr>  <td>' + '<img src= ' + product.Character_image2 + '> ' + '</td>  <td>' + '<img src= ' + product.Rarity + '> ' + '</td>  <td>' + '<img src= ' + product.Specialty + '> ' + '</td><td>' + '<img src= ' + product.Style
                + '> ' + '</td> <td>' + product.Name + '</td> <td>' + product.Gender + '</td> </tr>'

            $('#datalist2').append(tableRow);
        });
        return SR_roll;
    }


    function rdm_SSR(rdm) {
        var SSR_roll = getRandomInt2(0, 5);
        console.log('SSR_Roll = ' + SSR_roll);

        // var SSR_character = [
        //     "Grandblue_project/SSR_00.png",
        //     "Grandblue_project/SSR_10.png",
        //     "Grandblue_project/SSR_20.png",
        //     "Grandblue_project/SSR_30.png",
        //     "Grandblue_project/SSR_40.png",
        //     "Grandblue_project/SSR_50.png",
        //     "Grandblue_project/SSR_60.png"
        // ];
        // var SSR_smallpic = [
        //     "Grandblue_project/SSR_02.png",
        //     "Grandblue_project/SSR_12.png",
        //     "Grandblue_project/SSR_22.png",
        //     "Grandblue_project/SSR_32.png",
        //     "Grandblue_project/SSR_42.png",
        //     "Grandblue_project/SSR_52.png",
        //     "Grandblue_project/SSR_62.png"
        // ];

        $.get("GBF.json", function (data, status) {
            var products = data.Search;
            var product = products[SSR_roll];
            document.getElementById("answer").src = product.Character_image0
            document.getElementById("answer2").src = product.Character_image2
            document.getElementById("answer3").src = product.Character_image1
            // document.getElementById("name").innerHTML = product.Name
            // document.getElementById("detail").innerHTML = product.Detail
                  
            $('#name').text(product.Name);    
            $('#detail').text(product.Detail); 

            var tableHead = '<tr> <th>Character</th> <th>Rarity</th> <th>Specialty</th>  <th>Style</td> <th>Name</th> <th>Gender</th> </tr>'
            $('#datalist2').append(tableHead);
            var tableRow = '<tr>  <td>' + '<img src= ' + product.Character_image2 + '> ' + '</td>  <td>' + '<img src= ' + product.Rarity + '> ' + '</td>  <td>' + '<img src= ' + product.Specialty + '> ' + '</td><td>' + '<img src= ' + product.Style
                + '> ' + '</td> <td>' + product.Name + '</td> <td>' + product.Gender + '</td> </tr>'

            $('#datalist2').append(tableRow);
        });
        return SSR_roll;
    }

    $("#seeAll").click(function () {
        console.log('Get Data . . .');
        $("#datalist").toggle("slow");
    });
});