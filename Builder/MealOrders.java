public class MealOrders {
    private final String MainMeal;
    private final String Starters;
    private final String Beverages;
    private final String Desserts;


    public MealOrders(Builder builder){
        this.MainMeal = builder.MainMeal;
        this.Starters = builder.Starters;
        this.Beverages = builder.Beverages;
        this.Desserts = builder.Desserts;

    }

    static class Builder{
        private String MainMeal;
        private String Starters;
        private String Beverages;
        private String Desserts;


        public MealOrders build(){

            return new MealOrders(this);
        }

        public Builder(String MainMeal ){
            this.MainMeal = MainMeal;
        }

//        public Builder MainMeal(String MainMeal){
//            this.MainMeal = MainMeal;
//            return this;
//        }

        public Builder Starters(String Starters){
            this.Starters = Starters;
            return this;
        }

        public Builder Beverages(String Beverages){
            this.Beverages = Beverages;
            return this;
        }

        public Builder Desserts(String Desserts){
            this.Desserts = Desserts;
            return this;
        }

    }

    @Override
    public String toString() {
        return "MealOrders{" +
                "MainMeal='" + MainMeal + '\'' +
                ", Starters='" + Starters + '\'' +
                ", Beverages='" + Beverages + '\'' +
                ", Desserts=" + Desserts +

                '}';
    }
}