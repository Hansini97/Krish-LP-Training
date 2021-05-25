public class Application {

    public static void main(String[] args) {

        MealTelescopic1 mealTelescopic1 = new MealTelescopic1("Teriyaki Chicken Pizza");
        System.out.println(mealTelescopic1);

        MealTelescopic2 mealTelescopic2 = new MealTelescopic2("Tandoori Chicken Pizza");
        System.out.println(mealTelescopic2);

        MealOrders.Builder builder = new MealOrders.Builder("Cheese Pizza");

        MealOrders morder = builder.Beverages("Pepsi").Starters("Garlic Bread").Desserts("Chocolate Lava Cake").build();
        MealOrders morder1 = builder.Beverages("Coke").Desserts("Mint Ice Cream").build();

        System.out.println(morder);
        System.out.println(morder1);


    }
}
