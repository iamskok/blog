import transitionDurations from "./transition-durations"

const [duration] = transitionDurations.map(duration => `${duration}s`)

const color = `color ${duration} ease`
const backgroundColor = `background-color ${duration} ease`
const fill = `fill ${duration} ease`
const width = `width ${duration} ease`
const opacity = `opacity ${duration} ease`
const boxShadow = `box-shadow ${duration} ease`

const transitions = {
  colorModeButton: `${color}, ${boxShadow}`,
  soundModeButton: `${color}, ${boxShadow}`,
  soundModeButtonWave: `${fill}`,
  codeBlock: `${boxShadow}`,
  codeBlockLanguageLabel: `${boxShadow}`,
  codeBlockCopyButton: `${boxShadow}`,
  card: `${boxShadow}`,
  blogCard: `${boxShadow}`,
  blogCardHeader: `${color}`,
  blogCardParagraph: `${color}`,
  link: `${color}, ${boxShadow}`,
  heading: `${color}, ${boxShadow}`,
  iconLink: `${color}, ${boxShadow}`,
  tableOfContentsLink: `${color}, ${boxShadow}`,
  tableOfContentsSummary: `${color}, ${boxShadow}`,
  progress: `${opacity}`,
  progressBar: `${width}`,
  progressValue: `${width}`,
  hitCounter: `${backgroundColor}`,
  paginationLink: `${color}, ${boxShadow}`,
}

export default transitions
