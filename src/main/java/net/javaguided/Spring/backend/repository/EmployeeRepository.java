package net.javaguided.Spring.backend.repository;

import net.javaguided.Spring.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
