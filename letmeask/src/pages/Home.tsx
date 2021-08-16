import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'



export function Home(){
    const history = useHistory();

    function handleCreateRoom(){
        history.push('/rooms/new');
    }


    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração sombolizando perguntas e respostas" />
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                <img src={logoImg} alt="letmeask" />


                <button onClick={handleCreateRoom} className="create-room">
                    <img src={googleIconImg} alt="logo google" />
                    Crie sua sala com o google
                </button>


                <div className="separator">Ou entre em uma sala</div>
                <form>
                    <input type="text" placeholder="Digite o cófigo da sala" />
                    <Button type="submit">
                        Entrar na Sala
                    </Button>
                </form>
                </div>
            </main>
        </div>
    )

}