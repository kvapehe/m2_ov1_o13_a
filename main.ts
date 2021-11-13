/**
 * Oppgave 13
 * 
 * Lag et program med neopixler hvor alle pikslene gradvis endrer farge over tid - i regnbue-fargene.
 * 
 * Dvs. at alle pikslene skal starte på rødt, deretter gradvis gå over til oransje, gul, grønn osv. helt til vi
 * 
 * kommer tilbake til rødt og det hele starter på nytt igjen. Du kan sette neopixel-typen til å være RGB
 * 
 * (GRB format) og bruke Microbit-simulatoren for å teste programmet.
 * 
 * Tips: Sett fargen på neopixlene ved å ha en variabel for fargetone (hue) og bruke
 * 
 * HSL-farger. La verdien på fargetone-variabelen øke jevnt fra 0 til 360:
 */
let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
let fargetone = 0
basic.forever(function () {
    strip.showColor(neopixel.hsl(fargetone, 100, 50))
    fargetone += 1
    fargetone = fargetone % 360
})
