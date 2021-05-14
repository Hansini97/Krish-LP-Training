import java.util.Scanner;

public class TomFrog{
	
	public static void main(String[] args){
		
		System.out.println("Please enter the distance: ");
		Scanner scanner = new Scanner(System.in);
		int distance = scanner.nextInt();

		int dist = 0;
		int rest = 0;
		int count = 0;
		int i = 0;

		while(dist < distance){
			
			
			if(dist > 0 ){
	
				rest += 5;
				
		
			}
			 
			dist += 5;
			count++;
			
			
			if(dist < distance){
				
				rest++;
				dist += 3;
				count++;
			}
			
			if(dist < distance){
				rest += 2;
				dist++;
				count++;
			}
			
			i++;
		}
		
		
		System.out.println("No of Hops: " +count);
		System.out.println("Time Taken to reach the distance: " +rest +" seconds");
		
		
	}
}