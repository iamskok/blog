/** @jsx jsx */
import { useContext } from "react"
import { jsx, IconButton, useThemeUI } from "theme-ui"
import useSound from "use-sound"
import { motion } from "framer-motion"
import popUpOffSound from "../../assets/sounds/pop-up-off.mp3"
import popUpOnSound from "../../assets/sounds/pop-up-on.mp3"
import { SoundContext } from "../sound-provider"
import SVG from "../svg"

const SoundModeButton = props => {
  const [sound, setSound] = useContext(SoundContext)
  const [playPopUpOff] = useSound(popUpOffSound)
  const [playPopUpOn] = useSound(popUpOnSound)
  const {
    theme: {
      transitionDurations: [duration],
    },
  } = useThemeUI()

  const clickHandler = () => {
    setSound(!sound)
    sound ? playPopUpOn() : playPopUpOff()
  }

  const waveGroupVariants = {
    hide: {
      transition: {
        staggerChildren: duration,
        staggerDirection: -1,
      },
    },
    show: {
      transition: { staggerChildren: duration },
    },
  }
  const wavePathVariants = {
    hide: {
      opacity: 0,
      transition: { duration },
    },
    show: {
      opacity: 1,
      transition: { duration },
    },
  }

  return (
    <IconButton
      aria-label="Toggle sound mode"
      onClick={clickHandler}
      sx={{
        color: `primary`,
        transition: `soundModeButton`,
        "&:hover": {
          color: `secondary`,
        },
        path: {
          fill: `currentColor`,
        },
      }}
      {...props}
    >
      <SVG viewBox="0 0 88 70">
        <path d="M44.017,2.121L24.304,16.964H6.36c-2.341,0-4.242,1.898-4.242,4.24v18.728c0,2.34,1.9,4.24,4.242,4.24h17.119l20.538,15.464  V2.121z" />
        <path d="M44.017,61.756c-0.451,0-0.901-0.143-1.276-0.424l-19.972-15.04H6.36c-3.507,0-6.36-2.853-6.36-6.36V21.205  c0-3.508,2.853-6.362,6.36-6.362h17.238L42.741,0.428c0.643-0.485,1.504-0.564,2.221-0.206c0.721,0.36,1.174,1.095,1.174,1.898  v57.516c0,0.805-0.453,1.54-1.174,1.897C44.663,61.684,44.339,61.756,44.017,61.756z M6.36,19.083c-1.168,0-2.12,0.952-2.12,2.122  v18.728c0,1.17,0.952,2.12,2.12,2.12h17.119c0.46,0,0.908,0.151,1.274,0.429l17.144,12.905V6.373L25.582,18.657  c-0.369,0.278-0.816,0.426-1.278,0.426H6.36z" />
        <motion.g
          variants={waveGroupVariants}
          animate={sound ? `show` : `hide`}
        >
          {[
            `M53.711,47.596c-0.62,0-1.239-0.271-1.657-0.796c-0.732-0.916-0.582-2.249,0.334-2.981c0.063-0.052,6.8-5.561,6.8-12.511  c0-7.028-6.368-12.495-6.432-12.55c-0.896-0.757-1.007-2.095-0.253-2.986c0.757-0.896,2.094-1.009,2.988-0.25  c0.328,0.272,7.937,6.809,7.937,15.786c0,9.012-8.05,15.55-8.394,15.824C54.644,47.445,54.176,47.596,53.711,47.596z`,
            `M61.903,53.956c-0.625,0-1.24-0.272-1.66-0.796c-0.732-0.916-0.58-2.25,0.334-2.98c0.1-0.079,10.212-8.329,10.212-18.871  c0-10.622-9.563-18.829-9.661-18.911c-0.896-0.755-1.006-2.093-0.249-2.988c0.757-0.894,2.093-1.005,2.986-0.249  c0.458,0.385,11.165,9.58,11.165,22.148c0,12.604-11.324,21.799-11.807,22.185C62.833,53.805,62.368,53.956,61.903,53.956z`,
            `M69.64,62c-0.621,0-1.24-0.271-1.654-0.796c-0.734-0.914-0.586-2.246,0.327-2.978c0.144-0.116,14.526-11.833,14.526-26.918  c0-15.165-13.602-26.839-13.737-26.956c-0.896-0.754-1.007-2.092-0.251-2.987c0.757-0.894,2.093-1.009,2.988-0.251  C72.46,1.641,87.08,14.194,87.08,31.308c0,17.146-15.459,29.704-16.118,30.229C70.571,61.847,70.104,62,69.64,62z`,
          ].map((d, key) => (
            <motion.path d={d} key={key} variants={wavePathVariants} />
          ))}
        </motion.g>
      </SVG>
    </IconButton>
  )
}

export default SoundModeButton
