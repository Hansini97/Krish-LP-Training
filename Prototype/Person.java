public abstract class Person implements Cloneable{

    private String NIC;
    private String Name;
    private String Dob;

    
    public String getNIC() {

        return NIC;
    }

    public void setNIC(String NIC) {

        this.NIC = NIC;
    }

    public String getName() {

        return Name;
    }

    public void setName(String Name) {

        this.Name = Name;
    }

    public String getDob() {

        return Dob;
    }

    public void setDob(String Dob) {

        this.Dob = Dob;
    }
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
      
        return super.clone();
    }


    
}
