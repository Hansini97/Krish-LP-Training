/**
 * Application
 */
public class Application {

    public static void main(String[] args) {

        CareTaker careTaker = new CareTaker();
        Palette palette = new Palette();

        palette.addElement(new Element("Frame"));
        palette.addElement(new Element("Label"));
        careTaker.save(palette);
        System.out.println(palette);

        palette.addElement(new Element("TextBox"));
        careTaker.save(palette);
        System.out.println(palette);

        palette.addElement(new Element("Button"));
        careTaker.save(palette);
        System.out.println(palette);

        palette.addElement(new Element("Slider"));
    //    careTaker.save(palette);
        System.out.println(palette);

        careTaker.revert(palette);
        System.out.println(palette);

        palette.addElement(new Element("Panel"));
       // careTaker.save(palette);
        System.out.println(palette);

        careTaker.revert(palette);
        System.out.println(palette);

        careTaker.revert(palette);
        System.out.println(palette);

        careTaker.revert(palette);
        System.out.println(palette);

        careTaker.revert(palette);
        System.out.println(palette);


    }
}


