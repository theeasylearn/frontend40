//create user defined function
// function getId(id)
// {
//     let tagId= document.getElementById(id);
//     return tagId;
// }
// or


function generateCalendar() {
    //store reference of tbody tag in variable tbody
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
    //store 1st day of month into Date of object
    let month = $('month').value;
    let year = $('year').value;
    let firstDayOfMonth = new Date(`${year}-${month}-01`);
    let dayOfWeek = firstDayOfMonth.getDay(); //2
    console.log(dayOfWeek); //2
    let count = 1;
    let day = 1;
    let lastDayOfMonth = 31;
    let row = 5;
    if (dayOfWeek >= 5)
        row = 6;
    if (month == 4 || month == 6 || month == 9 || month == 11)
        lastDayOfMonth = 30;
    else if (month == 2) {
        lastDayOfMonth = 28;

    }
    //outer loop
    while (count <= row) {
        let content = ``
        let anotherCount = 1;
        //inner loop
        do {
            anotherCount = anotherCount + dayOfWeek;
            //inner loop
            while (dayOfWeek > 0) // 0>0
            {
                content = content + `<td></td>`;
                dayOfWeek--;
            }
            content = content + `<td>${day}</td>`;
            anotherCount = anotherCount + 1;
            day = day + 1;
        }
        while (anotherCount <= 7 && day <= lastDayOfMonth);
        content = `<tr>` + content + `</tr>`;
        tbody.innerHTML = tbody.innerHTML + content;
        count = count + 1;
    }

    return false; //to stop refreshing webpage
}