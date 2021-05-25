public class Student extends Person {
    
    private String StudentID;

   

    public String getStudentID() {

        return StudentID;
    }

    public void setStudentID(String StudentID) {

        this.StudentID = StudentID;
    }

    @Override
    public String toString() {
        
        return "Student{" +
                "StudentID=" +StudentID+
                '}';
    }

}
