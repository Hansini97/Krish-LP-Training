import java.util.ArrayList;
import java.util.List;

public abstract class Offer {

    protected List<WomenClothing> womenClothings = new ArrayList<>();

    public Offer(){

        // invoke the createPackage method
        createOffer();
    }

    protected abstract void createOffer();

    @Override
        public String toString(){
            return "OFFER{"+
                    "Items=" + womenClothings +
                    '}';

            
        }
}




