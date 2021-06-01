var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';


var tableBody = document.getElementById('table-body')

fetch(url).then(resp => resp.json()).
then(data => {
    console.log(data)
    
    data.map(({id,firstName,lastName,email,phone},index,data)=>{
        var a=0;
         const listTds = 
       ` <td class="column1">${id}</td>
        <td class="column2">${firstName}</td>
        <td class="column3">${lastName}</td>
        <td class="column4">${email}</td>
        <td class="column5">${phone}</td>`
        var tableRow = document.createElement('tr')
        tableRow.className="data-row";
        tableRow.innerHTML = listTds; 
        tableRow.id = index;
        tableBody.appendChild(tableRow);

       






        tableRow.addEventListener('click',function(){
            console.log('clicked')
            var k = tableRow.id;
            var detailsWrapper = document.getElementById('info-content')
            detailsWrapper.style.display="block"
            const details = 
            ` <div><b>User selected:</b>${data[k].firstName} ${data[k].lastName}</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                   ${data[k].description}
                </textarea>
            </div>
            <div><b>Address:</b> ${data[k].address.streetAddress}</div>
            <div><b>City:</b> ${data[k].address.city}</div>
            <div><b>State:</b> ${data[k].address.state}</div>
            <div><b>Zip:</b> ${data[k].address.zip}</div>`
            detailsWrapper.innerHTML = details;

        })
    })
    var rows = document.getElementsByClassName('data-row')
    for(i=0;i<data.length;i++){
        rows[i].addEventListener('click',function(){
           
            for(i=0;i<data.length;i++){
                 if(rows[i].classList == 'data-row active'){
                console.log(rows[i].className)
                rows[i].classList.remove('active') 
            }}
        console.log(this)
        this.classList.add('active')
    })

    }
    
    var table = document.getElementsByTagName('table')[1]
    console.log(table.getElementsByTagName('tr'))

   
  
   
})


       function searchTable() {
        var input, filter, found, table, tr, td, i, j;
        input = document.getElementById("search-box");
        filter = input.value.toUpperCase();
        table = document.getElementsByTagName('table')[1];
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            
            for (j = 1; j < 3; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    

