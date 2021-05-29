public class Level1 extends AllowanceHandler {

    @Override
    public double applyAllowance(Salary salary) {

        salary.setAllowance(salary.getAllowance() + salary.getBasic() * 0.05);

              return salary.getAllowance();
        }
    }
