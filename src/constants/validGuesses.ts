import { CONFIG } from './config'

export const VALIDGUESSES = [
"ayqiy",
"armay",
"aysay",
"chaniy",
"churay",
"chukuy",
"ch´away",
"jamuy",
"jap´iy",
"kutay",
"pichay",
"muchuy",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
