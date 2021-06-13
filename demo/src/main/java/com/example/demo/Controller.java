package com.example.demo;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    @Autowired
    StudentService studentService;

    @RequestMapping("/")
    public String greeting(){
        return "<h2>Welcome to game changing framework.. Spring Boot !! </h2>";
    }

    @RequestMapping(value = "/student",method = RequestMethod.POST)
    public Student save(@RequestBody Student student){
        return studentService.save(student);
    }

    @RequestMapping(value = "/student",method = RequestMethod.GET)

    public ResponseEntity<Student> fetchStudent(@RequestParam int id){

        Student student = studentService.fetchStudentById(id);
        if(student == null){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.ok().body(student);
        }
    }

}