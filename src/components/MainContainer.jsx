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

    //--------------------FUNCTIONS--------------------

    const handleBpmChange = e => {
        e.preventDefault();
        setSettings({...settings, bpm: e.target.value, mills: 15000 / settings.bpm});
    };

    const starter = e => {
        e.preventDefault();
        setSettings({...settings, playing: true});
    };

    const stopper = e => {
        e.preventDefault();
        setSettings({...settings, playing: false});
    };

    const tripletSetter = e => {
        e.preventDefault();
        if (settings.triplet) {
            setSettings({...settings, triplet: false, mills: 20000 / settings.bpm});
        } else {
            setSettings({...settings, triplet: true, mills: 15000 / settings.bpm});
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
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
                <div className="singleButtonFirst">
                    <div className="firstLineSpyOff"></div>
                    <div className="secondLineSpyOff"></div>
                    <div className="sequencerButton">
                        <div className="thirdLineSpyOff"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;