import React, { useState } from "react";

function MainContainer() {

    //--------------------STATE--------------------

    const [settings, setSettings] = useState({
        playing: false,
        bpm: 120,
        mills: 500
    });

    //--------------------FUNCTIONS--------------------

    const handleBpmChange = e => {
        e.preventDefault();
        setSettings({...settings, bpm: e.target.value, mills: 60000 / settings.bpm});
        console.log(settings);
    };

    //--------------------RETURN--------------------

    return(
        <div className="mainContainer">
            <div className="title">
                <h1>Drum Machine</h1>
                <h2>by Fabio Lorenzi</h2>
            </div>
            <div className="playerSection">
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
        </div>
    );
};

export default MainContainer;