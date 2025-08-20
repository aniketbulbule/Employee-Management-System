package com.main.sms.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.main.sms.entity.Student;
import  com.main.sms.service.StudentService;
// import com.main.sms.entity.Student;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class FrontController {

    @Autowired
    private StudentService ss;

    @GetMapping("/get")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public String getMessage(){
        return  "hello,Aniket";
    }

    @PostMapping("/addStudent")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public ResponseEntity<String> addStudent(@RequestBody Student student) {
    ss.addStudent(student);
    return ResponseEntity.ok("Student added successfully");
    }

    @GetMapping("/getStudent")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public List<Student> getAllStudent(){
		return ss.getAllStudent(); 
	}

    @DeleteMapping("/deleteStudent/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    public ResponseEntity<Student> deleteStudent(@PathVariable int id) {
    Student deleted = ss.deleteStudent(id);
    return ResponseEntity.ok(deleted);
}

@PutMapping("/updatedStudent")
@CrossOrigin(origins = "http://127.0.0.1:5500")
    public ResponseEntity<String> updateStudent(@RequestBody Student student) {
        try {
            ss.updateStudent(student);
            return ResponseEntity.ok("Student updated successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }




}

