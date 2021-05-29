public abstract class AllowanceHandler {
    

        protected AllowanceHandler successor;
    
        public void setSuccessor(AllowanceHandler successor){

            this.successor=successor;
        }
    
        public abstract double applyAllowance(Salary salary);
    
    
}
