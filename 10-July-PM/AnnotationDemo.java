package AU_Java;

import java.io.*;
//import javax.xml;

@Servlet(
		name = "ServletDemo", 
		URLPattern = "http://demo.annotation.com"
	)
public class AnnotationDemo {

	String servletName;
	String urlPattern;
	String className;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		AnnotationDemo anno = new AnnotationDemo().getAnnotationInfo();
		
		System.out.println(anno.servletName);
		System.out.println(anno.urlPattern);
		System.out.println(anno.className);
		
		anno.toXML();

	}

	public void toXML() {
		// TODO Auto-generated method stub
		try {
			
			FileWriter fw = new FileWriter("C:\\WEB.XML");
			fw.write("<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?> \n");
			fw.write("<web-app> \n\t <servlet> \n");
			fw.write("\t\t <servlet-name>" + this.servletName + "</servlet-name> \n");
			fw.write("\t\t <servlet-class>" + this.className + "</class-name> \n");
			fw.write("\t </servlet> \n\n");
			fw.write("\t <servlet-mapping> \n");
			fw.write("\t\t <servlet-name>" + this.servletName + "</servlet-name> \n");
			fw.write("\t\t <url-pattern>" + this.urlPattern + "</url-pattern> \n");
			fw.write("\t </servlet-mapping> \n</web-app>");
			fw.close();
			System.out.println("File created.");
			
		} catch (Exception e) {
			System.out.println("Error!");
		}
		
	}

	public AnnotationDemo getAnnotationInfo() {
		// TODO Auto-generated method stub
		Class c = this.getClass();
		this.className = c.getName();
		
		Servlet s = (Servlet) c.getAnnotation(Servlet.class);
		
		this.servletName = s.name();
		this.urlPattern = s.URLPattern();
		
		return this;
		
	}

}
