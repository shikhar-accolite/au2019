package AU_Java;

import java.util.Scanner;

public class LinkedHashMap {
	
	Node[] nodes;
	Node start;
	
	public static class Node {
		int key;
		int value;
		Node prev, next, before, after;
		
		public Node(int key, int value) {
			this.key = key;
			this.value = value;
			this.prev = null;
			this.next = null;
			this.before = null;
			this.after = null;
		}
	}
	
	public LinkedHashMap(int size) {
		this.nodes = new Node[size];
	}
	
	public static void main( String[] args ) {
		
//		LinkedHashMap linkedHashMap = new LinkedHashMap(2);
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the capacity for LinkedHashMap := ");
		LinkedHashMap linkedHashMap = new LinkedHashMap( sc.nextInt() );
		
		boolean flag = false;
		while ( !flag ) {
			
			System.out.println("1. Put");
			System.out.println("2. Delete");
			System.out.println("3. Get");
			System.out.println("4. Display");
			
			int choice = sc.nextInt();
			
			switch( choice ) {
			
			case 1 :
				linkedHashMap.put( sc.nextInt(), sc.nextInt() );
				break;
				
			case 2 :
				linkedHashMap.delete( sc.nextInt() );
				break;
				
			case 3 :
				Node reqNode = linkedHashMap.get( sc.nextInt() );
				if ( reqNode == null ) {
					System.out.println( "Key doesn't exist" );
				} else {
					System.out.println( reqNode.value );
				}
				break;
				
			case 4 :
				linkedHashMap.display();
				break;
				
			default :
				flag = true;
			
			}
			
		}
		
		sc.close();
		
	}

	public void put(int key, int value) {
		
		Node node = new Node(key, value);
		
		if ( start == null ) {
			start = node;
		} else {
			
			if ( get(key) == null ) {
				
				Node temp = start;
				while ( temp.after != null ) {
					temp = temp.after;
				}
				
				temp.after = node;
				node.before = temp;
			}
			
		}
		
		int hash = getHash(key);
		if ( nodes[ hash ] == null ) {
			nodes[ hash ] = node;
		} else {
			
			Node nodeTemp = get(key);
			if ( nodeTemp == null ) {
				
				Node temp = nodes[hash];
				while ( temp.next != null ) {
					temp = temp.next;
				}
				
				temp.next = node;
				node.prev = temp;
			} else {
				nodeTemp.value = value;
			}
			
		}
		
	}
	
	private int getHash(int key) {
		// TODO Auto-generated method stub
		return key % (this.nodes.length);
	}

	public void delete(int key) {
		
		Node delNode = get(key);
		if ( delNode == null ) {
			System.out.println("Key doesn't exist");
		} else {
			
			System.out.println( "Deleted Node is : (" + delNode.key + ", " + delNode.value + ")" );
			
			if ( delNode.prev != null && delNode.next != null ) {
				delNode.prev.next = delNode.next;
				delNode.next.prev = delNode.prev;
			} else if ( delNode.prev == null && delNode.next != null ) {
				delNode.next.prev = delNode.prev;
				
				int hash = getHash(key);
				nodes[hash] = delNode.next;
			} else if ( delNode.prev != null && delNode.next == null ) {
				delNode.prev.next = delNode.next;
			} else if ( delNode.prev == null && delNode.next == null ) {
				int hash = getHash(key);
				nodes[hash] = null;
			}
			
			
			if ( delNode.before != null && delNode.after != null ) {
				delNode.before.after = delNode.after;
				delNode.after.before = delNode.before;
			} else if ( delNode.before == null && delNode.after != null ) {
				delNode.after.before = delNode.before;
				
				start = delNode.after;
			} else if ( delNode.before != null && delNode.after == null ) {
				delNode.before.after = delNode.after;
			} else if ( delNode.before == null && delNode.after == null ) {
				start = null;
			}
			
		}
		
	}
	
	public Node get(int key) {
		
		Node temp = nodes[ getHash(key) ];
		while (temp != null) {
			
			if ( key == temp.key ) {
				return temp;
			}
			
			temp = temp.next;
		}
		
		return (Node)null;
		
	}
	
	public void display() {
			
		Node temp = start;
		while (temp != null) {
			System.out.println( "(" + temp.key + ", " + temp.value + ")" );
			temp = temp.after;
		}
		
	}

}
