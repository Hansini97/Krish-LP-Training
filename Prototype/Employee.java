public class Employee extends Person {
    
    private String EmployeeID;
    private double Salary;
    
    public String getEmployeeID() {

        return EmployeeID;
    }

    public void setEmployeeID(String EmployeeID) {

        this.EmployeeID = EmployeeID;
    }

    public double getSalary() {

        return Salary;
    }

    public void setSalary(double Salary) {

        this.Salary = Salary;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "Employee{" +
                 "EmployeeID= " + EmployeeID + " , "+
                 "Salary=" + Salary+
                  '}';
    }
}
