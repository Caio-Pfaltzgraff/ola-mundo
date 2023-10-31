import PostModel from "components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.png";

import styles from "./AboutMe.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function AboutMe() {
  return (
    <PostModel fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, sou Caio Pfaltzgraff!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Caio com um carrinho do Harry Potter"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Fala ae, tudo certo? Sou estudante de Análise e Desenvolvimento de
        Sistemas e é ótimo vê-lo aqui.
      </p>
      <p className={styles.paragrafo}>
        Comecei com programação na faculdade e no curso online da Softblue. Eu
        aprendi lógica de programação, linguagem C e C++, HTML, CSS e
        JavaScript, porém ainda não estava tão envolvido no universo da
        tecnologia e não sabia muito o que fazer, pensei muitas vezes em
        desistir do curso.
      </p>
      <p className={styles.paragrafo}>
        Depois de alguns períodos na faculdade, via que não estava me
        desenvolvendo, pois, eu estudava mas não entendia muito bem e não sabia
        como aplicar meus estudos, ainda mais pela faculdade ser EAD e tinha que
        me virar sozinho. Depois de algumas pesquisas decidi escolher uma
        linguagem para me aprofundar nela, porém via a necessidade de buscar um
        ensino fora da faculdade, foi onde decidi escolher a Alura, no qual fiz
        cursos de Java e comecei a entender mais o universo tecnológico.
      </p>
      <p className={styles.paragrafo}>
        Com isso comecei a construir uma base mais sólida, entendendo como as
        coisas se encaixavam e me desenvolvendo ainda mais. Também vi cursos
        gratuitos de outras empresas como a DIO e Rocketseat e fiquei mais
        confiante nas minhas habilidades.
      </p>
      <p className={styles.paragrafo}>
        E depois de alguns anos já domino Java, Spring Boot, SQL e sigo
        estudando React para aprimorar minhas habilidades e ser um desenvolvedor
        mais completo. Tenho um bom conhecimento na construção de APIs Rest e de
        alguns frameworks, sigo desenvolvendo meus projetos de acordo com tudo o
        que venho aprendendo, para mostrar que sou capaz de conseguir minha
        primeira vaga no mercado.
      </p>
      <p className={styles.paragrafo}>
        Desde então, tenho estudado bastatnte e buscado o meu tão sonhado "SIM"
        para uma vaga de estágio ou quem sabe dev Júnior. Com isso venho
        compartilhar meus aprendizados com você e um pouco da minha história.
        Espero ter ajudado em algo e que tenha gostado!
      </p>
    </PostModel>
  );
}
