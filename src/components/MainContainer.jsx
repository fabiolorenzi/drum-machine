import React, { useState } from "react";

function MainContainer() {

    //--------------------STATE--------------------

    const [settings, setSettings] = useState({
        playing: false,
        bpm: 120,
        triplet: false,
        mills: 125
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
                    <button className="tripletButton" id={settings.triplet ? "tripletActive" : ""} onClick={tripletSetter}>3</button> 
                </div>
            </div>
        </div>
    );
};

export default MainContainer;