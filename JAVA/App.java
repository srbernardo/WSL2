import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        System.out.println("ola mundo");
        int num = 1;
        String coisa = "coisa";
        System.out.print(coisa);
        System.out.println(num + " " + coisa);
        System.out.print(coisa+"\n");
        System.out.print("\n"+coisa);

        Scanner in = new Scanner(System.in);
        String c = in.nextLine();
        int d = in.nextInt();
        int e = in.nextInt();
        System.out.println(d + e);
    }
}