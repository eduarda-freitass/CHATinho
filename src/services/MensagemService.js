
import mensagemRepository from '../repositories/MensagemRepository';

class MensagemService {

  getMensagens(contatoId) {
    return mensagemRepository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    if (!texto || !texto.trim()) {
      return null;
    }

    const mensagem = {
      id: Date.now(),
      contatoId: contatoId,
      texto: texto.trim(),
      recebida: false
    };

    mensagemRepository.adicionarMensagem(mensagem);
    return mensagem;
  }
}

export default new MensagemService();
