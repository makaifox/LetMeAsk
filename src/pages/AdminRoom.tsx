import { useHistory, useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

import { Button } from '../Components/Button';
import { Question } from '../Components/Question';
import { RoomCode } from '../Components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/userRoom';

import '../styles/room.scss'
import { database } from '../services/firebase';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomID = params.id;

  const { title, questions } = useRoom(roomID);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomID}`).update({
      endedAt: new Date(),
    })

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomID}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeAsk" />
          <div>
            <RoomCode code={params.id} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>


        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  );
}