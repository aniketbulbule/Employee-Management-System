package com.main.sms.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.sms.entity.Student;
import com.main.sms.repo.StudentRepo;

@Service
public class StudentService {
    @Autowired
    private StudentRepo dao;

    public void addStudent(Student student){
        dao.save(student);
    }

    public List<Student> getAllStudent(){
        return  dao.findAll();
    }

    public Student deleteStudent(int id) {
    Student student = dao.findById(id)
        .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
    dao.deleteById(id);
    return student;
}

public Student updateStudent(Student student) {
        Optional<Student> existingStudent = dao.findById(student.getId());
        if (existingStudent.isPresent()) {
            return dao.save(student);  // save will update because ID exists
        } else {
            throw new RuntimeException("Student not found with id: " + student.getId());
        }
    }

}
