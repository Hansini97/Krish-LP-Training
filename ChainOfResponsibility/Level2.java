public class Level2 extends AllowanceHandler {

    @Override
        public  double applyAllowance(Salary salary){
    
            salary.setAllowance(salary.getAllowance() + salary.getBasic()*0.2);


            if(salary.getBasic()>75000.0 && salary.getBasic()<=95000.0){

                return salary.getAllowance();
            }

            else{

                return successor.applyAllowance(salary);
            
           }
       }
    }