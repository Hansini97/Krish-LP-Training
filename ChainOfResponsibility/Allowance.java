public class Allowance extends AllowanceHandler {
    
    @Override
    public double applyAllowance(Salary salary){

        return successor.applyAllowance(salary);
    }
}
