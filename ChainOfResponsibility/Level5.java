public class Level5 extends AllowanceHandler {

    @Override
    public  double applyAllowance(Salary salary){

        salary.setAllowance(salary.getBasic()*0.2);

        if(salary.getBasic()<=35000.0){
            return salary.getAllowance();
        }
        else{
            return successor.applyAllowance(salary);

        }
    }
}