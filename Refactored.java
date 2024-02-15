public class Refactored {
    public static void main(String[] args) {
        int result = addNumbers(5, 3);
        System.out.println("Result: " + result);
    }

    private static int addNumbers(int a, int b) {
        return a + b;
    }
}
