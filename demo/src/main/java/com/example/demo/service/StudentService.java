package com.example.demo.service;

import com.example.demo.model.Student;

public interface StudentService {

    Student save(Student student);

    Student fetchStudentById(int id);
}
