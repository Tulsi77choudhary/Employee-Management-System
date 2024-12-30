package net.javaguided.Spring.backend;

import net.javaguided.Spring.backend.model.Employee;
import net.javaguided.Spring.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class SpringBackendApplication implements CommandLineRunner {

    @Autowired
    private EmployeeRepository employeeRepository;

    public static void main(String[] args) {

        SpringApplication.run(SpringBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Employee employee = new Employee();
//		employee.setFirstName("Ramesh");
//		employee.setLastName("Choudhary");
//		employee.setEmail("rameshchoudhary321@gmail.com");
//		System.out.println(employee);
//		employeeRepository.save(employee);
//
//		Employee employees = new Employee();
//		employees.setFirstName("Ramesh");
//		employees.setLastName("Choudhary");
//		employees.setEmail("rameshchoudhary321@gmail.com");
//		System.out.println(employees);
//		employeeRepository.save(employees);
    }


}
