    function f() {
        var arr;
        var  city=""
        var  street=""
        var  numhouse=""
        var all=""
        var url="https://galasd4w3.pythonanywhere.com/?token=vPl9neb4IBg*NzXx&city="+ document.getElementById("city").value+"&street="+document.getElementById("street").value+"&numhouse="+document.getElementById("numhouse").value
        fetch(url)
            .then(response => response.json())
            .then(data =>document.getElementById("all").textContent=data.mikud)
/*
        arr.mikud//.replace("\r","")
        arr.city
        arr.street
        arr.numhouse
 */
       // document.getElementById("all").value=
    }
