import { useIntl } from 'react-intl';

import WorkCard from './WorkCard';
import minesweeperRec from '../../../assets/recordings/minesweeper-recording.mp4';
import virtualPianoRec from '../../../assets/recordings/virtual-piano-recording.mp4';
import wordCounterRec from '../../../assets/recordings/word-counter-recording.mp4';
import './styles/index.scss'

export default function Works() {
  const Intl = useIntl()

  return (
    <div className="works" id="work">
      <WorkCard
        title={Intl.formatMessage({ id: 'project_minesweeper' })}
        description={Intl.formatMessage({ id: 'project_minesweeper_description' })}
        placingClass={'vertical'}
        recordingURL={minesweeperRec}
        key={1}
        projectURL="https://homodevus.github.io/Minesweeper_Hyperskill/"
      />
      <WorkCard
        title={Intl.formatMessage({ id: 'project_piano' })}
        description={Intl.formatMessage({ id: 'project_piano_description' })}
        placingClass={'horizontal'}
        recordingURL={virtualPianoRec}
        key={2}
        projectURL="https://homodevus.github.io/VirtualPiano_Hyperskill/"
      />
      <WorkCard
        title={Intl.formatMessage({ id: 'project_word_counter' })}
        description={Intl.formatMessage({ id: 'project_word_counter_description' })}
        placingClass={'big'}
        key={3}
        recordingURL={wordCounterRec}
        projectURL="https://smart-word-counter.glitch.me/"
      />
    </div>
  )
}