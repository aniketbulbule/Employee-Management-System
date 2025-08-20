
document.addEventListener("DOMContentLoaded", () => {

  const urlParam = new URLSearchParams(window.location.search);
  document.getElementById("updatedId").value = urlParam.get('id');
  document.getElementById("updatedName").value = urlParam.get('name');
  document.getElementById("updatedDept").value = urlParam.get('dept');
  document.getElementById("updatedAge").value = urlParam.get('age');

});

async function updateSubmit(event) {
    event.preventDefault();

  const id = parseInt(document.getElementById("updatedId").value);
  const name = document.getElementById("updatedName").value;
  const department = document.getElementById("updatedDept").value;
  const age = parseInt(document.getElementById("updatedAge").value);

  const student = { id, name, department, age };


  const baseURL = `http://localhost:8080/updatedStudent`;

  try {

    const resp = await fetch(baseURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    });

    if (resp.ok) {
      alert("Employee updated successfully");
      window.location.href = "view.html";
    } else {
      alert("Employee to update student: " + resp.statusText);
    }
  } catch (error) {
    console.error("Error while updating employee:", error);
    alert("Error while updating employee");
  }
}
