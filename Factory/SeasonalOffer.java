public class SeasonalOffer {
    public static Offer createOffer(OfferCode offerCode){
      
      switch(offerCode){
      
        case BEST:
          return new BestDeal();
         
        case EXCLUSIVE:
          return new ExclusiveDeal();
         
        case DOORBUSTER:
          return new DoorbusterDeal();
        
        default:
          return null;
      
      
     } 
  }
}