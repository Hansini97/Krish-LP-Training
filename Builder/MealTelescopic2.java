public class MealTelescopic2 {

    String MainMeal;
    String Starters;
    String Beverages;
    String Desserts;

    public MealTelescopic2(String MainMeal, String Beverages, String Desserts, String Starters) {
        this.MainMeal = MainMeal;
        this.Beverages = Beverages;
        this.Desserts = Desserts;
        this.Starters = Starters;
    }

    public MealTelescopic2(String MainMeal, String Beverages, String Desserts) {
        this(MainMeal, Beverages, Desserts, null);

    }

    public MealTelescopic2(String MainMeal, String Beverages) {
        this(MainMeal, Beverages, null);
    }

    public MealTelescopic2(String MainMeal) {
        this(MainMeal, null);
    }

    @Override
    public String toString() {
        return "MealTelescopic2{" + "MainMeal='" + MainMeal + '\'' + "Beverages=" + Beverages + ",Desserts='"
                + Desserts + '\'' + ",Starters='" + Starters + '\'' + '}';
    }

}
