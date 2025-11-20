// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class LogService {

    private static final String ARQUIVO = "logs.csv";
    private static final DateTimeFormatter FORMATADOR =
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public static void registrar(String usuario, String acao, String descricao, String ip) {
        String timestamp = LocalDateTime.now().format(FORMATADOR);
        String linha = String.format("%s,%s,%s,\"%s\",%s%n",
                timestamp, usuario, acao, descricao, ip);

        try (FileWriter fw = new FileWriter(ARQUIVO, true)) {
            fw.write(linha);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        registrar("matheus", "LOGIN", "Usuário entrou no sistema", "192.178.0.10");
        registrar("matheus", "ALTERACAO", "Alterou dados do cliente 12", "192.178.0.10");
    }
}
