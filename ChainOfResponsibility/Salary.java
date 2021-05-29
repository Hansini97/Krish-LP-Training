public class Salary {
    public int salaryId;
    private double basic;
    private double allowance;

    protected void setAllowance(double allowance) {
        this.allowance=allowance;
    
    }

    public Salary(int salaryId, double basic) {
        this.salaryId= salaryId;
        this.basic = basic;
    }

    public int getSalaryId(){
        return salaryId;
    }
    public double getBasic(){
        return basic;
    }
    public double getAllowance(){
        return allowance;
    }

}