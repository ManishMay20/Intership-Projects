$.ajax({

    type : 'get' ,
    url : 'https://disease.sh/v3/covid-19/countries' ,
    success : function(responce)
    {
        console.log(responce)
        for(var i=0; i<responce.length; i++){
            var totalactive = responce[i].cases - responce[i].recovered -responce[i].deaths;
            var tablerow = `<tr>
             <td> ${responce[i].country} </td>
             <td> ${responce[i].cases} </td>
             <td> ${totalactive} </td>
             <td> ${responce[i].recovered} </td>
             <td> ${responce[i].deaths} </td>
             </tr>`
            console.log(responce[i].country);
            $('#tbody').append(tablerow);
        }
        $('#covidtable').DataTable()
    },
    error : function(error)
    {
        console.log(error)
    }
})


