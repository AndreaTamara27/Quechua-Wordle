import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"a",
"ch",
"ch´",
"chh",
"i",
"j",
"k",
"k´",
"kh",
"l",
"ll",
"m",
"n",
"ñ",
"p",
"p´",
"ph",
"q",
"q´",
"qh",
"r",
"s",
"t",
"t´",
"th",
"u",
"w",
"y",

]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
