public class Level4 extends AllowanceHandler {

    @Override
        public  double applyAllowance(Salary salary){
    
            salary.setAllowance(salary.getAllowance() + salary.getBasic()*0.25);


            if(salary.getBasic()>35000.0 && salary.getBasic()<=55000.0){

                return salary.getAllowance();
            }

            else{

                return successor.applyAllowance(salary);
            
           }
       }

    }