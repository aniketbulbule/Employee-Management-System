

  //Insert
  async function handleSubmit(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById("id").value);
    const name = document.getElementById("name").value;
    const department = document.getElementById("dept").value;
    const age = parseInt(document.getElementById("age").value);

    const student = { id, name, department, age };
    const baseURL = "http://localhost:8080/addStudent";

    try {
      const resp = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      if (resp.ok) {
        alert("✅ Employee added successfully");
      } else {
        alert("❌ Failed to add employee: " + resp.status + " " + resp.statusText);
      }
    } catch (error) {
      console.error("Error while adding the employee:", error);
      alert("⚠️ Could not connect to backend");
    }
  }
    
  
  //read
  function redirectToViewStudent(){
    window.location.href="view.html"
  }

