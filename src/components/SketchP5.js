import Sketch from "react-p5";

export default function SketchP5() {

    let inpText;
    let fontSize;
    let tracking;
    let yWave, yWaveSize, yWaveLength, yWaveSpeed;

    const setup = (p5) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
    };

    const draw = (p5) => {
        p5.background('#FFF');
        inpText = String('wavy');
        p5.textSize(10);
        p5.textAlign(p5.LEFT);

        fontSize = 22;
        tracking = 15;
        yWaveSize = 2;
        yWaveLength = 1;
        yWaveSpeed = 0.1;

        p5.translate(p5.width / 2, p5.height / 2);

        p5.translate(-(inpText.length - 1) * tracking / 2, 0);

        p5.noStroke();
        p5.textSize(fontSize);
        p5.textAlign(p5.CENTER);

        for (var i = 0; i < inpText.length; i++) {
            yWave = p5.sin(p5.frameCount * yWaveSpeed + i * yWaveLength) * yWaveSize;

            p5.fill(0);
            p5.push();
            p5.translate(i * tracking, 0);

            p5.text(inpText.charAt(i), 0, yWave);
            p5.pop();
        }

    }

    return <Sketch setup={setup} draw={draw} />;
}