package Socket;
import java.io.*;
import java.net.*;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.util.*;  



public class Cliente {
    public static void main(String[ ] args) throws UnknownHostException, IOException {
        Socket cliente = new Socket("127.0.0.1", 8787);
        ObjectOutputStream output = new ObjectOutputStream(cliente.getOutputStream());
        ObjectInputStream input = new ObjectInputStream(cliente.getInputStream());
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
        LocalDateTime now = LocalDateTime.now();  
        Scanner in = new Scanner(System.in);  
        System.out.print("Enter your name: ");  
        String name = in.nextLine();  
        output.writeUTF(name+": MSG CLIENTE");
        output.writeUTF(dtf.format(now));
        output.flush();
        String msg = input.readUTF();
        System.out.println("Resposta Servidor: " + msg);
        
        output.close();
        input.close();
        cliente.close();
        System.out.println("Conexão encerrada");
       } 
}
