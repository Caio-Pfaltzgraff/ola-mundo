import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>
                    Olá, seja bem-vindo ao meu espaço pessoal! Sou Caio Pfaltzgraff, estudante de Análise e Desenvolvimento de sistemas, aqui compartilho alguns de meus conhecimentos tecnológicos, espero que curtam 😄.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='circulo colorido'/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Caio Sorrindo' />
            </div>
        </div>
    )
}