import java.util.HashMap;
import java.util.Map;

public class PersonRegistry {
    
    private Map<PersonType, Person> persons = new HashMap<>();

    public PersonRegistry(){
        this.initialize();
    }

    public Person getPerson(PersonType personType){
        Person person =null;

        try{
            person = (Person) persons.get(personType).clone();

        }catch(CloneNotSupportedException e){
            e.printStackTrace();
        }
        return person;
    }

    private void initialize(){
        Employee employee = new Employee();
        employee.setNIC("693629377V");
        employee.setName("Nimali Perera");
        employee.setDob("1969.05.29");
        employee.setEmployeeID("M2392");
        employee.setSalary(60000.00);

        Student student = new Student();
        student.setNIC("974535211V");
        student.setName("Meraki Bandara");
        student.setDob("1997.08.19");
        student.setStudentID("IT19273826");

        persons.put(PersonType.EMPLOYEE, employee);
        persons.put(PersonType.STUDENT, student);
    }
}
