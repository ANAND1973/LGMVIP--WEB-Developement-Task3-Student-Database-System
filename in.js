const data = [
    {
        name: "Keerthivasan",
        Biology:"85",
        Maths:"90",
        Tamil : "100"
    },
    {
        name: "Arun",
        Biology:"100",
        Maths:"97",
        Tamil : "80"
    },
    {
        name: "Anand",
        Biology:"75",
        Maths:"99",
        Tamil : "80"
    },
    {
        name: "Parthi",
        Biology:"99",
        Maths:"80",
        Tamil : "72"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<hr><h3>" + "Biology : " + data[i].Biology +"</h3></hr>" + "<hr><h3>" + "Maths : " 
            + data[i].Maths +"</h3></hr>" +"<h3><hr>" + "Tamil : " + data[i].Tamil +"</h3></hr>"+"<hr></hr>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "NO info about this student!!!" + "</h3>" 
})  