document.onreadystatechange = function() {
    if (document.readyState === 'complete') {

        // Use XMLHttpRequest() or fetch() to pull from your API endpoint at http://localhost:8000/api/v1'
        //connects to API
        fetch('http://localhost:8000/api/v1')
            //response = the data ... we convert it to json
            .then(function(response) {
                return response.json()
            })
            //for each piece of data (each object)  create the html elements.
            .then(function(data) {
                data.forEach(function(data1) {
                    var tableBody = document.querySelector('#data tbody')
                    var row = document.createElement('tr')
                    var keys = Object.keys(data1)
                      keys.forEach(function(key) {
                        var col = document.createElement('td')
                        var val = data1[key];
                        var text = document.createTextNode(val)
                        col.appendChild(text)
                        row.appendChild(col)
                        console.log(col);
                    });
                    row.classList.add('movieRow')
                        //takes table and APPENDS the tr created above
                    tableBody.appendChild(row)
                })
            })

    }
}
