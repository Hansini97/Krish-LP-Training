public class CommunicationManager {

    private static volatile CommunicationManager comManager;

    private CommunicationManager(){
        if(comManager != null){
            throw new RuntimeException("Please use getComManager method");
        }

    }

    public static CommunicationManager getComManager(){

        if(comManager == null){
            synchronized (CommunicationManager.class){
                if(comManager == null){
                    comManager = new CommunicationManager();
                }
            }

        }

        return comManager;
    }
}

