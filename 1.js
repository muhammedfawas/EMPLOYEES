
var emp=[
    {
     emp_id:"cap101",
     emp_name:"Manu",
     emp_photo:"https://cdn2.vectorstock.com/i/thumb-large/16/01/young-and-successful-business-man-cartoon-employee-vector-15281601.jpg",
     emp_age:21,
     emp_gnder:"male",
     emp_company:"Campgemini",
     emp_salary:300000,
     emp_designation:"webdeveloper",
     emp_doj:new Date('2015/05/05'),
     emp_loc:"mandya",
     emp_education:"BE"


},
    {
        emp_id:"cap102",
        emp_name:"Sonu",
        emp_photo:"https://cdn3.vectorstock.com/i/thumb-large/16/07/young-and-successful-business-man-cartoon-employee-vector-15281607.jpg",
        emp_age:23,
        emp_gnder:"male",
        emp_company:"Infosys",
        emp_salary:35000,
        emp_designation:"developer",
        emp_doj:new Date('2013/06/05'),
        emp_loc:"pune",
        emp_education:"Bsc"
   
    },
    {
        emp_id:"cap103",
        emp_name:"Ramu",
        emp_photo:"https://cdn2.vectorstock.com/i/thumb-large/16/11/young-and-successful-business-man-cartoon-employee-vector-15281611.jpg",
        emp_age:25,
        emp_gnder:"male",
        emp_company:"TCS",
        emp_salary:60000,
        emp_designation:"webdeveloper",
        emp_doj:new Date('2015/05/05'),
        emp_loc:"bangalore",
        emp_education:"B-tech"
   
    },
    {
        emp_id:"cap104",
        emp_name:"Sona",
        emp_photo:"https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170610620/80347707-business-woman-standing-cartoon-employee-vector-illustration.jpg",
        emp_age:21,
        emp_gnder:"female",
        emp_company:"Campgemini",
        emp_salary:40000,
        emp_designation:"Testin",
        emp_doj:new Date('2016/07/05'),
        emp_loc:"hydharabadh",
        emp_education:"M-tech"
   
    }
];
var empl=[];
emp.forEach(function(empData){
empl.push(`<div class="card" style="width: ">
<img src="${empData.emp_photo}" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${empData.emp_name} 
  <span class="badge badge-success" style="float:right">${empData.emp_id}</span></h5>
  <ul class="list-group">
  <li class="list-group-item">Job:${empData.emp_designation}</li>
  <li class="list-group-item">Company:${empData.emp_company}</li>
  <li class="list-group-item">Age:${empData.emp_age}</li>
  <li class="list-group-item">Salary:${empData.emp_salary}</li>
  <li class="list-group-item">Location:${empData.emp_loc}</li>
  <li class="list-group-item">Gender:${empData.emp_gnder}</li>
  <li class="list-group-item">Education:${empData.emp_education}</li>
  <li class="list-group-item">Date of Joining:${empData.emp_doj}</li>
  
</ul><br>
 <idv><a href="#" class="btn btn-primary">Go somewhere</a></div>
  
</div>
</div>`
);

});
document.getElementById("template").innerHTML=empl;

