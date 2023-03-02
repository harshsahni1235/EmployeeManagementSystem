package com.harsh.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.harsh.springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
