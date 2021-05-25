public class MealTelescopic1 {

    String MainMeal;
    String Starters;
    String Beverages;
    String Desserts;


    public MealTelescopic1(String MainMeal) {
        this.MainMeal = MainMeal;
    }

    public MealTelescopic1(String MainMeal, String Beverages) {
        this(MainMeal);
        this.Beverages = Beverages;
    }

    public MealTelescopic1(String MainMeal, String Beverages, String Desserts) {
        this(MainMeal, Beverages);
        this.Desserts = Desserts;
    }

    public MealTelescopic1(String MainMeal, String Beverages, String Desserts, String Starters) {
        this(MainMeal, Beverages, Desserts);
        this.Starters = Starters;
    }

    @Override
    public String toString() {
        return "MealTelescopic1{" + "MainMeal='" + MainMeal + '\'' + "Beverages=" + Beverages + ",Desserts='" + Desserts + '\''
                + ",Starters='" + Starters + '\'' + '}';
    }

}
