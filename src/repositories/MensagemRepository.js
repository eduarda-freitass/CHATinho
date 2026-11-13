
class MensagemRepository {

  constructor() {
    this.mensagens = [
      {
        id: 1,
        contatoId: 5,
        texto: 'Clara: oi',
        recebida: true
      },
      {
        id: 2,
        contatoId: 5,
        texto: 'Duda: a ogra sempre muito seca, BOM DIA MENINAS',
        recebida: false
      },
      {
        id: 3,
        contatoId: 5,
        texto: 'Kayla: a claire é um caso perdido, bom dia minorias',
        recebida: true
      }
    ];
  }

  getMensagens(contatoId) {
    return this.mensagens.filter(m => m.contatoId === contatoId);
  }

  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}

export default new MensagemRepository();
