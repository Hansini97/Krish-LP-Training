import java.util.ArrayList;

/**
 * Originator
 */
public class Palette {
    ArrayList<Element> elements = new ArrayList<>();

    public void addElement(Element element) {

        elements.add(element);
    }

    public ArrayList<Element> getElement() {

        return (ArrayList) elements.clone();

    }

    public GUIMemento save() {

        return new GUIMemento(getElement());
    }

    public void revert(GUIMemento guiMemento) {

        elements = guiMemento.geteElement();
    }

    @Override
    public String toString() {

        return "GUIPalette{" + "elements" + elements + '}';

    }

    static class GUIMemento {

        ArrayList<Element> elements;

        public GUIMemento(ArrayList<Element> elements) {

            this.elements = elements;
        }

        private ArrayList<Element> geteElement() {

            return elements;
        }

    }

}
