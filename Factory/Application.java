public class Application{
    
    public static void main(String[] args){
    
      Offer aOffer = SeasonalOffer.createOffer(OfferCode.EXCLUSIVE);
      System.out.println(aOffer);
      
      Offer aOffer1 = SeasonalOffer.createOffer(OfferCode.DOORBUSTER);
      System.out.println(aOffer1);
      
    
    }


}
