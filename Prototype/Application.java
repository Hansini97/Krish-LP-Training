public class Application {
    
    public static void main(String[] args) {
      
        PersonRegistry personRegistry = new PersonRegistry();
        Employee employee = (Employee) personRegistry.getPerson(PersonType.EMPLOYEE);
        System.out.println(employee);

        employee.setSalary(70000.00);

        System.out.println(employee);

        Employee employee1 =(Employee) personRegistry.getPerson(PersonType.EMPLOYEE);
        System.out.println(employee1);

    }
}
