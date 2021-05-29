public class Application {

    public static void main(String[] args) {

        Level5 level5 = new Level5();
        Level4 level4 = new Level4();
        Level3 level3 = new Level3();
        Level2 level2 = new Level2();
        Level1 level1 = new Level1();
        Allowance allowance = new Allowance();

        allowance.setSuccessor(level5);
        level5.setSuccessor(level4);
        level4.setSuccessor(level3);
        level3.setSuccessor(level2);
        level2.setSuccessor(level1);

        Salary salary = new Salary(1, 50000);
        System.out.println("Allowance: Rs:" + allowance.applyAllowance(salary));
        System.out.println("Your Total Salary Amount is: Rs:" +(50000 + +(allowance.applyAllowance(salary))));

        Salary salary1 = new Salary(2, 85000);
        System.out.println("Allowance: Rs:" + allowance.applyAllowance(salary1));
        System.out.println("Your Total Salary Amount is: Rs:" +(85000 + +(allowance.applyAllowance(salary1))));


        Salary salary2 = new Salary(3, 100000);
        System.out.println("Allowance: Rs:" + allowance.applyAllowance(salary2));
        System.out.println("Your Total Salary Amount is: Rs:" +(100000 + +(allowance.applyAllowance(salary2))));

        Salary salary3 = new Salary(4, 63500);
        System.out.println("Allowance: Rs:" + allowance.applyAllowance(salary3));
        System.out.println("Your Total Salary Amount is: Rs:" +(63500 + +(allowance.applyAllowance(salary3))));

        Salary salary4 = new Salary(5, 45000);
        System.out.println("Allowance: Rs:" + allowance.applyAllowance(salary4));
        System.out.println("Your Total Salary Amount is: Rs:" +(45000 + +(allowance.applyAllowance(salary4))));

        Salary salary5 = new Salary(6, 75000);
        System.out.println("Allowance: Rs:" + allowance.applyAllowance(salary5));
        System.out.println("Your Total Salary Amount is: Rs:" +(75000 + +(allowance.applyAllowance(salary5))));



    }
}
