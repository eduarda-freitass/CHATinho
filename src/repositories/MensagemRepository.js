
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
      },
      {
        id: 4,
        contatoId: 1,
        texto: '▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:30',
        recebida: true
      },
      {
        id: 5,
        contatoId: 2,
        texto: 'tÔ gag',
        recebida: true
      },
      {
        id: 6,
        contatoId: 3,
        texto: 'olha issooo',
        recebida: true
      },
      {
        id: 7,
        contatoId: 3,
        texto: '➀ Foto',
        recebida: true
      },
      {
        id: 8,
        contatoId: 4,
        texto: 'ei, beber hoje ou nada haver?',
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
