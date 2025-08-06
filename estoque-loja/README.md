**Aprimorando Habilidades em JS**<br>1 / 2 - Sistema de Estoque da Loja do Mestre dos Magos<br>`Intermediário` `Estrutura de Dados`

## Descrição

O Mestre dos Magos possui uma loja de itens mágicos e precisa de um sistema confiável para verificar o estoque antes de realizar uma venda. O objetivo deste programa é receber o nome do item desejado, a quantidade disponível no estoque e a quantidade solicitada pelo cliente, e então retornar uma mensagem apropriada.

### 🛠️ Requisitos Técnicos

- Criar uma função chamada `verificarEstoque()` que recebe três parâmetros:
  - `nomeItem` (string)
  - `quantidadeDisponivel` (inteiro)
  - `quantidadeSolicitada` (inteiro)
  - A função deve retornar uma string com a mensagem correspondente.
- O programa deve garantir que os valores informados para **quantidade** sejam números inteiros válidos. Caso contrário, deve exibir `"Erro: Quantidades devem ser numeros inteiros."`

## Entrada

O programa recebe **três entradas**:

1. **Nome do item** (*string*)  → Nome do item mágico que o cliente deseja comprar.
2. **Quantidade disponível** (*inteiro*)  → Número de unidades disponíveis no estoque.
3. **Quantidade solicitada **(*inteiro*)  → Número de unidades que o cliente deseja comprar.

🔎 Observação:
- Caso o usuário forneça um valor inválido para a quantidade (exemplo: uma palavra ao invés de um número), o programa deve exibir uma mensagem de erro.

## Saída

Após processar os dados, o programa deve imprimir **uma única mensagem**, que pode ser:

- `"Pedido realizado"` → Se houver estoque suficiente.
- `"Estoque insuficiente"`  → Se não houver estoque suficiente.
- `"Erro: Quantidades devem ser numeros inteiros."` → Se o usuário inserir valores inválidos para as quantidades

## Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada                       | Saída                                         |
| ----------------------------- | --------------------------------------------- |
| Pocao de Cura <br>10<br/>5    | Pedido realizado                              |
| Bola de Cristal<br/>3<br/>5   | Estoque insuficiente                          |
| Varinha Magica<br/>sete<br/>3 | Erro: Quantidades devem ser numeros inteiros. |

> **Atenção:** É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.