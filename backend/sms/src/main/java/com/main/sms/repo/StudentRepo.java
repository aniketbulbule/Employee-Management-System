package com.main.sms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.main.sms.entity.Student;

@Repository
public interface  StudentRepo  extends  JpaRepository<Student, Integer> {

}
