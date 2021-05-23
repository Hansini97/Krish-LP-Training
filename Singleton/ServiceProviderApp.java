public class ServiceProviderApp {

    public static void main(String[] args){

        CommunicationManager comManager = CommunicationManager.getComManager();
        System.out.println(comManager);

        CommunicationManager comManager1 = CommunicationManager.getComManager();
        System.out.println(comManager1);
    }
}
