import React, { useState, useRef } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { BsSliders } from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";

import sample1 from "../audio/kick.wav";
import sample2 from "../audio/snare.wav";
import sample3 from "../audio/clap.wav";
import sample4 from "../audio/closedHat.wav";
import sample5 from "../audio/openHat.wav";
import sample6 from "../audio/crash.wav";
import sample7 from "../audio/ride.wav";
import sample8 from "../audio/percussion_1.wav";
import sample9 from "../audio/percussion_2.wav";
import sample0 from "../audio/tom.wav";

function MainContainer() {

    //--------------------STATE--------------------

    const kickSample = new Audio(sample1);
    const snareSample = new Audio(sample2);
    const clapSample = new Audio(sample3);
    const closedHatSample = new Audio(sample4);
    const openHatSample = new Audio(sample5);
    const crashSample = new Audio(sample6);
    const rideSample = new Audio(sample7);
    const percussion1Sample = new Audio(sample8);
    const percussion2Sample = new Audio(sample9);
    const tomSample = new Audio(sample0);

    const [settings, setSettings] = useState({
        playing: false,
        bpm: 120,
        triplet: false,
        mills: 125
    });

    const [kick, setKick] = useState({
        volume: 1,
        spy: true
    });

    const [snare, setSnare] = useState({
        volume: 1,
        spy: false
    });

    const [clap, setClap] = useState({
        volume: 1,
        spy: false
    })

    const [closedHat, setClosedHat] = useState({
        volume: 1,
        spy: false
    });

    const [openHat, setOpenHat] = useState({
        volume: 1,
        spy: false
    });

    const [crash, setCrash] = useState({
        volume: 1,
        spy: false
    });

    const [ride, setRide] = useState({
        volume: 1,
        spy: false
    });

    const [percussion_1, setPercussion_1] = useState({
        volume: 1,
        spy: false
    });

    const [percussion_2, setPercussion_2] = useState({
        volume: 1,
        spy: false
    });

    const [tom, setTom] = useState({
        volume: 1,
        spy: false
    });

    const [mainPattern, setMainPattern] = useState({
        length: 16,
        part01: true,
        part02: true,
        part03: true,
        part04: true,
        part05: true,
        part06: true,
        part07: true,
        part08: true,
        part09: true,
        part10: true,
        part11: true,
        part12: true,
        part13: true,
        part14: true,
        part15: true,
        part16: true
    });

    var rhythmState = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

    const [rhythmPattern, setRhythmPattern] = useState({
        part01: rhythmState[0],
        part02: rhythmState[1],
        part03: rhythmState[2],
        part04: rhythmState[3],
        part05: rhythmState[4],
        part06: rhythmState[5],
        part07: rhythmState[6],
        part08: rhythmState[7],
        part09: rhythmState[8],
        part10: rhythmState[9],
        part11: rhythmState[10],
        part12: rhythmState[11],
        part13: rhythmState[12],
        part14: rhythmState[13],
        part15: rhythmState[14],
        part16: rhythmState[15]
    });

    var player = useRef(null);
    var counter = 0;

    const [sequenceButton, setSequenceButton] = useState({
        part01: false,
        part02: false,
        part03: false,
        part04: false,
        part05: false,
        part06: false,
        part07: false,
        part08: false,
        part09: false,
        part10: false,
        part11: false,
        part12: false,
        part13: false,
        part14: false,
        part15: false,
        part16: false
    });

    //--------------------FUNCTIONS--------------------

    const handleBpmChange = e => {
        e.preventDefault();
        if (!settings.triplet) {
            setSettings({...settings, bpm: e.target.value, mills: 15000 / settings.bpm});
        } else {
            setSettings({...settings, bpm: e.target.value, mills: 20000 / settings.bpm});
        }
    };

    const starter = e => {
        e.preventDefault();
        if (!settings.playing) {
            setSettings({...settings, playing: true});
            clearInterval(player.current);
            player.current = setInterval(
                () => {
                    if (counter === 0) {
                        rhythmState[0] = true;
                        rhythmState[mainPattern.length-1] = false;
                        counter++;
                    } else if (counter > 0 && counter < mainPattern.length-1) {
                        rhythmState[counter] = true;
                        rhythmState[counter-1] = false;
                        counter++;
                    } else {
                        rhythmState[counter] = true;
                        rhythmState[counter-1] = false;
                        counter = 0;
                    };
                    setRhythmPattern({
                        part01: rhythmState[0],
                        part02: rhythmState[1],
                        part03: rhythmState[2],
                        part04: rhythmState[3],
                        part05: rhythmState[4],
                        part06: rhythmState[5],
                        part07: rhythmState[6],
                        part08: rhythmState[7],
                        part09: rhythmState[8],
                        part10: rhythmState[9],
                        part11: rhythmState[10],
                        part12: rhythmState[11],
                        part13: rhythmState[12],
                        part14: rhythmState[13],
                        part15: rhythmState[14],
                        part16: rhythmState[15]
                    });
                }, settings.mills
            );
        };
    };

    const stopper = e => {
        e.preventDefault();
        clearInterval(player.current);
        setSettings({...settings, playing: false});
        rhythmState = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        setRhythmPattern({
            part01: rhythmState[0],
            part02: rhythmState[1],
            part03: rhythmState[2],
            part04: rhythmState[3],
            part05: rhythmState[4],
            part06: rhythmState[5],
            part07: rhythmState[6],
            part08: rhythmState[7],
            part09: rhythmState[8],
            part10: rhythmState[9],
            part11: rhythmState[10],
            part12: rhythmState[11],
            part13: rhythmState[12],
            part14: rhythmState[13],
            part15: rhythmState[14],
            part16: rhythmState[15]
        });

    };

    const tripletSetter = e => {
        e.preventDefault();
        if (settings.triplet) {
            setSettings({...settings, triplet: false, mills: 20000 / settings.bpm});
        } else {
            setSettings({...settings, triplet: true, mills: 15000 / settings.bpm});
            setMainPattern({
                length: 12,
                part01: true,
                part02: true,
                part03: true,
                part04: true,
                part05: true,
                part06: true,
                part07: true,
                part08: true,
                part09: true,
                part10: true,
                part11: true,
                part12: true,
                part13: false,
                part14: false,
                part15: false,
                part16: false
            });
        };
    };

    const handleVolume = e => {
        e.preventDefault();
        if (e.target.name === "kick.volume") {
            setKick({...kick, volume: e.target.value});
        } else if (e.target.name === "snare.volume") {
            setSnare({...snare, volume: e.target.value});
        } else if (e.target.name === "clap.volume") {
            setClap({...clap, volume: e.target.value});
        } else if (e.target.name === "closedHat.volume") {
            setClosedHat({...closedHat, volume: e.target.value});
        } else if (e.target.name === "openHat.volume") {
            setOpenHat({...openHat, volume: e.target.value});
        } else if (e.target.name === "crash.volume") {
            setCrash({...crash, volume: e.target.value});
        } else if (e.target.name === "ride.volume") {
            setRide({...ride, volume: e.target.value});
        } else if (e.target.name === "percussion_1.volume") {
            setPercussion_1({...percussion_1, volume: e.target.value});
        } else if (e.target.name === "percussion_2.volume") {
            setPercussion_2({...percussion_2, volume: e.target.value});
        } else {
            setTom({...tom, volume: e.target.value});
        };
    };

    const playSample = (e, sample) => {
        e.preventDefault();
        if (sample === "kick") {
            kickSample.volume = kick.volume;
            kickSample.play();
        } else if (sample === "snare") {
            snareSample.volume = snare.volume;
            snareSample.play();
        } else if (sample === "clap") {
            clapSample.volume = clap.volume;
            clapSample.play();
        } else if (sample === "closedHat") {
            closedHatSample.volume = closedHat.volume;
            closedHatSample.play();
        } else if (sample === "openHat") {
            openHatSample.volume = openHat.volume;
            openHatSample.play();
        } else if (sample === "crash") {
            crashSample.volume = crash.volume;
            crashSample.play();
        } else if (sample === "ride") {
            rideSample.volume = ride.volume;
            rideSample.play();
        } else if (sample === "percussion_1") {
            percussion1Sample.volume = percussion_1.volume;
            percussion1Sample.play();
        } else if (sample === "percussion_2") {
            percussion2Sample.volume = percussion_2.volume;
            percussion2Sample.play();
        } else {
            tomSample.volume = tom.volume;
            tomSample.play();
        };
    };

    const sampleSelector = (e, sample) => {
        e.preventDefault();
        if (sample === "kick") {
            setKick({...kick, spy: true});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "snare") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: true});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "clap") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: true});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "closedHat") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: true});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "openHat") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: true});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "crash") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: true});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "ride") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: true});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "percussion_1") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: true});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: false});
        } else if (sample === "percussion_2") {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: true});
            setTom({...tom, spy: false});
        } else {
            setKick({...kick, spy: false});
            setSnare({...snare, spy: false});
            setClap({...clap, spy: false});
            setClosedHat({...closedHat, spy: false});
            setOpenHat({...openHat, spy: false});
            setCrash({...crash, spy: false});
            setRide({...ride, spy: false});
            setPercussion_1({...percussion_1, spy: false});
            setPercussion_2({...percussion_2, spy: false});
            setTom({...tom, spy: true});
        };
    };

    const handlePatternLength = e => {
        e.preventDefault();
        var lengthValue = e.target.value;
        let listPat = [];
        for (let i = 1; i <= 16; i++) {
            if (i <= lengthValue) {
                let val = true;
                listPat.push(val);
            } else {
                let val = false;
                listPat.push(val);
            };
        };
        setMainPattern({
            length: lengthValue,
            part01: listPat[0],
            part02: listPat[1],
            part03: listPat[2],
            part04: listPat[3],
            part05: listPat[4],
            part06: listPat[5],
            part07: listPat[6],
            part08: listPat[7],
            part09: listPat[8],
            part10: listPat[9],
            part11: listPat[10],
            part12: listPat[11],
            part13: listPat[12],
            part14: listPat[13],
            part15: listPat[14],
            part16: listPat[15]
        })
    };

    const handleSequence = (e, index) => {
        e.preventDefault();
        let seqStates = [sequenceButton.part01, sequenceButton.part02, sequenceButton.part03, sequenceButton.part04,
            sequenceButton.part05, sequenceButton.part06, sequenceButton.part07, sequenceButton.part08, sequenceButton.part09,
            sequenceButton.part10, sequenceButton.part11, sequenceButton.part12, sequenceButton.part13, sequenceButton.part14,
            sequenceButton.part15, sequenceButton.part16];
        let val = seqStates[index];
        seqStates[index] = !val;
        setSequenceButton({
            part01: seqStates[0],
            part02: seqStates[1],
            part03: seqStates[2],
            part04: seqStates[3],
            part05: seqStates[4],
            part06: seqStates[5],
            part07: seqStates[6],
            part08: seqStates[7],
            part09: seqStates[8],
            part10: seqStates[9],
            part11: seqStates[10],
            part12: seqStates[11],
            part13: seqStates[12],
            part14: seqStates[13],
            part15: seqStates[14],
            part16: seqStates[15]
        });
    };

    //--------------------RETURN--------------------

    return(
        <div className="mainContainer">
            <div className="title">
                <h1>Drum Machine</h1>
                <h2>by Fabio Lorenzi</h2>
            </div>
            <div className="playerSection">
                <div className="bpmSection">
                    <label htmlFor="bpm">BPM</label>
                    <input
                        type="number"
                        id="bpmSel"
                        name="bpm"
                        min="40"
                        max="300"
                        value={settings.bpm}
                        onChange={handleBpmChange}
                    />
                </div>
                <div className="secondLine">
                    <button
                        className="tripletButton"
                        id={settings.triplet ? "tripletActive" : ""}
                        onClick={tripletSetter}>
                            3
                    </button>
                </div>
                <div className="thirdLine">
                    <label htmlFor="length">PAT</label>
                    <input
                        type="number"
                        id="lengthSel"
                        name="mainPattern"
                        min="1"
                        max={settings.triplet === false ? "16" : "12"}
                        value={mainPattern.length}
                        onChange={handlePatternLength}
                    />
                </div>
                <div className="playLine">
                    <button
                        className="playStopButton playButton"
                        id={settings.playing ? "playButtonActive" : ""}
                        onClick={starter}>
                            <AiFillCaretRight id="playWritten" />
                    </button>
                    <button
                        className="playStopButton stopButton"
                        onClick={stopper}>
                            <BsSliders id="stopWritten" />
                    </button>
                </div>
            </div>
            <div className="sampleSection">
                <div className="singleSample" id="kickSection">
                    <h1>Kick</h1>
                    <label htmlFor="kick.volume">Vol</label>
                    <input
                        type="number"
                        name="kick.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={kick.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "kick")}><AiFillSound className="listenIcon" /></button>
                    <div className={kick.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "kick")}>Sel</button>
                </div>
                <div className="singleSample" id="snareSection">
                    <h1>Snare</h1>
                    <label htmlFor="snare.volume">Vol</label>
                    <input
                        type="number"
                        name="snare.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={snare.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "snare")}><AiFillSound className="listenIcon" /></button>
                    <div className={snare.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "snare")}>Sel</button>
                </div>
                <div className="singleSample" id="clapSection">
                    <h1>Clap</h1>
                    <label htmlFor="clap.volume">Vol</label>
                    <input
                        type="number"
                        name="clap.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={clap.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "clap")}><AiFillSound className="listenIcon" /></button>
                    <div className={clap.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "clap")}>Sel</button>
                </div>
                <div className="singleSample" id="ClosedHatSection">
                    <h1>C Hat</h1>
                    <label htmlFor="clap.volume">Vol</label>
                    <input
                        type="number"
                        name="closedHat.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={closedHat.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "closedHat")}><AiFillSound className="listenIcon" /></button>
                    <div className={closedHat.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "closedHat")}>Sel</button>
                </div>
                <div className="singleSample" id="openHatSection">
                    <h1>O Hat</h1>
                    <label htmlFor="openHat.volume">Vol</label>
                    <input
                        type="number"
                        name="openHat.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={openHat.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "openHat")}><AiFillSound className="listenIcon" /></button>
                    <div className={openHat.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "openHat")}>Sel</button>
                </div>
                <div className="singleSample" id="crashSection">
                    <h1>Crash</h1>
                    <label htmlFor="crash.volume">Vol</label>
                    <input
                        type="number"
                        name="crash.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={crash.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "crash")}><AiFillSound className="listenIcon" /></button>
                    <div className={crash.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "crash")}>Sel</button>
                </div>
                <div className="singleSample" id="rideSection">
                    <h1>Ride</h1>
                    <label htmlFor="ride.volume">Vol</label>
                    <input
                        type="number"
                        name="ride.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={ride.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "ride")}><AiFillSound className="listenIcon" /></button>
                    <div className={ride.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "ride")}>Sel</button>
                </div>
                <div className="singleSample" id="percussion1Section">
                    <h1>Perc 1</h1>
                    <label htmlFor="percussion_1.volume">Vol</label>
                    <input
                        type="number"
                        name="percussion_1.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={percussion_1.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "percussion_1")}><AiFillSound className="listenIcon" /></button>
                    <div className={percussion_1.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "percussion_1")}>Sel</button>
                </div>
                <div className="singleSample" id="percussion2Section">
                    <h1>Perc 2</h1>
                    <label htmlFor="percussion_2.volume">Vol</label>
                    <input
                        type="number"
                        name="percussion_2.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={percussion_2.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "percussion_2")}><AiFillSound className="listenIcon" /></button>
                    <div className={percussion_2.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "percussion_2")}>Sel</button>
                </div>
                <div className="singleSample" id="tomSection">
                    <h1>Tom</h1>
                    <label htmlFor="tom.volume">Vol</label>
                    <input
                        type="number"
                        name="tom.volume"
                        min="0"
                        max="1"
                        step="0.1"
                        value={tom.volume}
                        onChange={handleVolume}
                    />
                    <button className="listenButton" onClick={e => playSample(e, "tom")}><AiFillSound className="listenIcon" /></button>
                    <div className={tom.spy ? "selectorOn" : "selectorOff"}></div>
                    <button className="selectButton" onClick={e => sampleSelector(e, "tom")}>Sel</button>
                </div>
            </div>
            <div className="sequencerSection">
                <div className="singleButtonFirst">
                    <div className={mainPattern.part01 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part01 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton button4" onClick={e => handleSequence(e, 0)}>
                        <div className={sequenceButton.part01 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part02 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part02 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 1)}>
                        <div className={sequenceButton.part02 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part03 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part03 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 2)}>
                        <div className={sequenceButton.part03 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part04 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part04 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton button3" onClick={e => handleSequence(e, 3)}>
                        <div className={sequenceButton.part04 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part05 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part05 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton button4" onClick={e => handleSequence(e, 4)}>
                        <div className={sequenceButton.part05 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part06 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part06 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 5)}>
                        <div className={sequenceButton.part06 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part07 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part07 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton button3" onClick={e => handleSequence(e, 6)}>
                        <div className={sequenceButton.part07 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part08 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part08 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 7)}>
                        <div className={sequenceButton.part08 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part09 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part09 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton button4" onClick={e => handleSequence(e, 8)}>
                        <div className={sequenceButton.part09 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part10 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part10 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton button3" onClick={e => handleSequence(e, 9)}>
                        <div className={sequenceButton.part10 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part11 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part11 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 10)}>
                        <div className={sequenceButton.part11 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part12 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part12 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 11)}>
                        <div className={sequenceButton.part12 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part13 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part13 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton button4" onClick={e => handleSequence(e, 12)}>
                        <div className={sequenceButton.part13 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part14 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part14 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 13)}>
                        <div className={sequenceButton.part14 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part15 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part15 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 14)}>
                        <div className={sequenceButton.part15 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className={mainPattern.part16 ? "firstLineSpyOn" : "firstLineSpyOff"}></div>
                    <div className={rhythmPattern.part16 ? "secondLineSpyOn" : "secondLineSpyOff"}></div>
                    <div className="sequencerButton" onClick={e => handleSequence(e, 15)}>
                        <div className={sequenceButton.part16 ? "thirdLineSpyOn" : "thirdLineSpyOff"}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;