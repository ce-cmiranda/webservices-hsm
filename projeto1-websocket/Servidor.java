package Socket;
import java.io.*;
import java.net.*;


public class Servidor {
    public static void main(String[] args) throws IOException {
     ServerSocket servidor = new ServerSocket(8787);
     System.out.println("Servidor na porta 8787");
     while(true) {
      Socket cliente = servidor.accept();
      ObjectOutputStream output = new ObjectOutputStream(cliente.getOutputStream());
      ObjectInputStream input = new ObjectInputStream(cliente.getInputStream());
      String msg = input.readUTF();
      System.out.println("Resposta Cliente: " + msg);
      output.writeUTF(msg);
      output.flush();
      input.close();
      output.close();
    //   servidor.close();
     }
    }
}