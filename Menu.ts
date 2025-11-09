import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/Model/Conta";
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPoupanca";

export function main(){

    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();


    while(true){

        console.log(colors.bg.black, colors.fg.yellow,
                    "***********************************************************");
        console.log("                                                           ");
        console.log("                 Banco do Brazil com Z                     ");
        console.log("                                                           ");
        console.log("***********************************************************");
        console.log("                                                           ");
        console.log("              1 - Criar Conta                              ");
        console.log("              2 - Listar todas as Contas                   ");
        console.log("              3 - Buscar Conta por Numero                  ");
        console.log("              4 - Atualizar Dados da Conta                 ");
        console.log("              5 - Apagar Conta                             ");
        console.log("              6 - Sacar                                    ");
        console.log("              7 - Depositar                                ");
        console.log("              8 - Transferir valores entre Contas          ");
        console.log("              9 - Sair                                     ");
        console.log("                                                           ");
        console.log("***********************************************************");
        console.log("                                                           ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                KeyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                
                KeyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Conta por Numero\n\n", colors.reset);

                KeyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados da Conta\n\n", colors.reset);

                KeyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Conta\n\n", colors.reset);

                KeyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSacar\n\n", colors.reset);

                KeyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepositar\n\n", colors.reset);

                KeyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferir valores entre Contas\n\n", colors.reset);

                KeyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\n\nOpção Inválida!\n\n", colors.reset);

                KeyPress()
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n***********************************************************");
    console.log("Projeto Desenvolvido por: Nayane Rodrigues Matos Santos Oi   ");
    console.log("nayane_rms@hotmail.com                                       ");
    console.log("https://github.com/nayaneoi                                  ");
    console.log("*************************************************************");
}

function KeyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();   
}

main();