document.addEventListener("DOMContentLoaded", fetchEmployees);

const apiUrl = "http://localhost:8080/api/v1/employee"; // Update with your API URL

// Fetch all employees and display them
async function fetchEmployees() {
  const response = await fetch(apiUrl);
  const employees = await response.json();
  const tableBody = document.getElementById("employeeTableBody");
  tableBody.innerHTML = "";

  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.email}</td>
      <td class="actions">
        <button onclick="editEmployee(${employee.id})">Edit</button>
        <button onclick="deleteEmployee(${employee.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Add or Update Employee
async function saveEmployee(event) {
  event.preventDefault();

  const id = document.getElementById("employeeId").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;

  const employee = { firstName, lastName, email };


   try {
         const response = await fetch("http://localhost:8080/api/v1/employee", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(employee), // Send JSON body
         });

         if (response.ok) {
             alert("Employee created successfully!");
             fetchEmployees(); // Refresh employee list
         } else {
             alert("Failed to create employee.");
         }
     } catch (error) {
         console.error("Error:", error);
     }
  }

// Delete Employee
async function deleteEmployee(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchEmployees();
}

// Edit Employee
async function editEmployee(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const employee = await response.json();

  document.getElementById("employeeId").value = employee.id;
  document.getElementById("firstName").value = employee.firstName;
  document.getElementById("lastName").value = employee.lastName;
  document.getElementById("email").value = employee.email;
}

// Event Listeners
document.getElementById("employeeForm").addEventListener("submit", saveEmployee);

// Initial Fetch
fetchEmployees();
