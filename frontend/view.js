
// DOMContentLoaded --> when our page is load
document.addEventListener("DOMContentLoaded",fetchStudent)

async function fetchStudent(){

    try{
        const resp=await fetch('http://localhost:8080/getStudent')    //by default is get , so no need provide method or content

        if(resp.ok){
            const data=await resp.json()
            const tbody=document.getElementById("tbody")
            tbody.innerHTML=""; //clear existing table content  

            data.forEach(student =>{
                let row=document.createElement('tr');
                row.innerHTML=`<td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.department}</td>
                <td>${student.age}</td>
                <td><button class="btn btn-primary" onclick="deleteStudent(${student.id})">Delete</button></td>
                <td><button class="btn btn-primary" onclick="updateStudent(${student.id},'${student.name}','${student.department}','${student.age}')">Update</button></td>`;

                tbody.appendChild(row);
            })
        }
    }catch(error){
        alert(error)
    }
}

async function deleteStudent(id) {
    let baseURL = `http://localhost:8080/deleteStudent/${id}`;  // add id to URL
    try {
        const resp = await fetch(baseURL, {
            method: 'DELETE'  // specify DELETE method
        });
        if (resp.ok) {
            alert("Student deleted successfully");
            fetchStudent();  // refresh the student list
        } else {
            alert("Failed to delete student: " + resp.statusText);
        }
    } catch (error) {
        alert(error);
    }
}


//------

function updateStudent(id, name, department, age) {
  const url = `update.html?id=${id}&name=${encodeURIComponent(name)}&age=${age}&dept=${encodeURIComponent(department)}`;
  window.location.href = url;
}
