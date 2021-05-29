public class Level3 extends AllowanceHandler {

    @Override
        public  double applyAllowance(Salary salary){
    
            salary.setAllowance(salary.getAllowance() + salary.getBasic()*0.3);


            if(salary.getBasic()>55000.0 && salary.getBasic()<=75000.0){

                return salary.getAllowance();
            }

            else{

                return successor.applyAllowance(salary);
            
        }
    }
    }